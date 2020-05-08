import { ActivatedRoute } from '@angular/router';
import { APIResponse } from 'src/app/models/apiresponse';
import { Teacher } from 'src/app/models/teacher';
import { TeacherService } from 'src/app/services/teacher.service';
import { ErrorStateMatcher, MatSnackBar } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { TeacherErrorStateMatcher } from 'src/app/helpers/teacher-error-state-matcher';
import { Router } from '@angular/router';



@Component({
  selector: 'app-add-t',
  templateUrl: './add-t.component.html',
  styleUrls: ['./add-t.component.css']
})
export class AddTComponent implements OnInit {

  private matcher: TeacherErrorStateMatcher;
  private teacherFormGroup: FormGroup;
  private id: string;
  public isOnUpdate: boolean;

  mail = new FormControl('', [Validators.required, Validators.email]);

  constructor(
    private formBuilder: FormBuilder,
    private teacherService: TeacherService,
    private snackbar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  getErrorMessage() {
    if (this.teacherFormGroup.controls.mail.hasError('required')) {
      return 'You should enter a value';
    }

    return this.mail.hasError('email') ? 'Not a valid email' : '';
  }
  ngOnInit() {
    this.teacherFormGroup = this.formBuilder.group({
      tid: [{ value: '', disabled: true}],
      jdate: [ new Date()],
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      address: [''],
      gender: [''],
      nic: [''],
      dob: [''],
      phone: [''],
      mstatus: [''],
      mphone: [''],
      nationality: [''],
      religion: [''],
      mail: [''],
      qul: [''],
    });

    this.route.queryParams.subscribe(params => {
      if (params.id) {
        this.isOnUpdate = true;
        this.id = params.id;
        this.teacherService.getTeacherId(this.id).subscribe((res: APIResponse) => {
          this.teacherFormGroup.patchValue(res.data);

        });

      } else {
        this.isOnUpdate = false;
        this.getNextTid();
        // this.teacherService.getNextTid().subscribe((response: APIResponse) => {

        //   this.teacherFormGroup.get('tid').setValue(response.data);
        // });
      }
    });


    this.matcher = new TeacherErrorStateMatcher();
  }

  private getNextTid(): void {
    this.teacherService.getNextTid().subscribe((response: APIResponse) => {
      this.teacherFormGroup.get('tid').setValue(response.data);
    });
  }


  public get TeacherFormGroup(): FormGroup {
      return this.teacherFormGroup;
  }

  public get TeacherErrorStateMatcher(): ErrorStateMatcher {
      return this.matcher;
  }

  public addTeacher() {

      const teacher = new Teacher(this.teacherFormGroup.getRawValue());

      this.teacherService.addTeacher(teacher).subscribe(res => {
        // console.log(res);
        this.snackbar.open('Added successfully!', '', { duration: 2000 });

        this.clear();

      }, err => {

        this.snackbar.open(err.message, '', {
          duration: 2000
        });
      });
      this.clear();
    }

    public updateTeacher() {

      const teacher = new Teacher(this.teacherFormGroup.getRawValue());

      this.teacherService.updateTeacher(this.id, teacher).subscribe(res => {
        this.snackbar.open('Updated successfully!', '', { duration: 2000 });

        this.clear();

      }, err => {

        this.snackbar.open('Please fill required fields', '', {
          duration: 3000
        });
      });
    }

    public clear() {
      this.teacherFormGroup.reset ();
      this.getNextTid();

      this.teacherFormGroup.controls.jdate.patchValue(new Date());
    }


}
