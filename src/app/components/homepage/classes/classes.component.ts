import { Component, OnInit } from '@angular/core';
import { ClassServices } from 'src/app/services/classes.service';
import {  MatSnackBar } from '@angular/material';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';

/*interface APIResponse {
  success :  boolean,
  data : any

}*/
@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']

})
export class ClasseshomeComponent implements OnInit {

  displayedColumns: string[] = ['name', 'teacher'];
  dataSource : MatTableDataSource<any>;
  //dataSource = new MatTableDataSource();

  
 /* private _id: String;
  private name: String;
  private classteacher: String;*/


  constructor(
    private classServices : ClassServices,
    private snackBar : MatSnackBar,
    private router : Router
  ) { }

  ngOnInit() {

    this.findClass();
  }

  /*applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }*/
 
   //view all the classes in the database
   findClass(){
    this.classServices.findClass().subscribe((res: any) => {
      this.dataSource = new MatTableDataSource (res.data);
      this.dataSource.filterPredicate = this.filterPredicate;
    }, err => {
      console.log(err.message);
    });
  }

  //search by class and teacher name
private filterPredicate = (data, filter: string) => {
  const accumulator = (currentTerm, key) => {
    return this.nestedFilterCheck(currentTerm, data, key);
  };
  const dataStr = Object.keys(data).reduce(accumulator, '').toLowerCase();
  const transformedFilter = filter.trim().toLowerCase();
  return dataStr.indexOf(transformedFilter) !== -1;
}

private nestedFilterCheck(applyFilter, data, key) {
  if (typeof data[key] === 'object') {
    for (const k in data[key]) {
      if (data[key][k] !== null) {
        applyFilter = this.nestedFilterCheck(applyFilter, data[key], k);
      }
    }
  } else {
    applyFilter += data[key];
  }
  return applyFilter;
}

applyFilter(keyword) {
  this.dataSource.filter = keyword.trim().toLowerCase();
}

}

