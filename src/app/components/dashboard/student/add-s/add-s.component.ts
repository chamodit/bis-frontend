import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { StudentService } from 'src/app/services/student.service';
import { ErrorStateMatcher, MatSnackBar } from '@angular/material';
import { TaskErrorStateMatcher } from 'src/app/helpers/task-error-state-matcher';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-add-s',
  templateUrl: './add-s.component.html',
  styleUrls: ['./add-s.component.css']
})
export class AddSComponent implements OnInit {

  private matcher: TaskErrorStateMatcher;
  private studentFormGroup: FormGroup;

  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(
    private formBuilder: FormBuilder,
    private studentService: StudentService,
    private snackbar: MatSnackBar
  ) { }

  getErrorMessage() {
    if (this.studentFormGroup.controls.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  ngOnInit() {
    this.studentFormGroup = this.formBuilder.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      address: [''],
      gender: [''],
      dob: [''],
      nation: [''],
      religion: [''],
      mail: [''],
      mname: [''],
      moccupation: [''],
      mworkp: [''],
      maddress: [''],
      mphone: [''],
      memail: [''],
      faname: [''],
      foccupation: [''],
      fworkp: [''],
      faddress: [''],
      fphone: [''],
      femail: [''],
    });
    this.matcher = new TaskErrorStateMatcher();
  }

  public get StudentFormGroup(): FormGroup {
    return this.studentFormGroup;
  }

  public get StudentErrorStateMatcher(): ErrorStateMatcher {
    return this.matcher;
  }

  public enrollStudent() {
    const student = new Student(this.studentFormGroup.value);

    this.studentService.enrollStudent(student).subscribe(res => {
      //notify
      this.snackbar.open('Enrolled successfully!', '', { duration: 2000 });

      //clear data

    }, err => {
      //error msg
      this.snackbar.open(err.message, '', {
        duration: 2000
      });
    });

  }


}
