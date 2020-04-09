import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Teacher } from '../models/teacher';


@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private http: HttpClient) { }

  public getTeacherId(id: string) {
    return this.http.get(`${environment.apiHost}/teachers/${id}`);
  }

  public getNextTid() {
    return this.http.get(`${environment.apiHost}/teachers/tid`);
  }

  public addTeacher(teacher: Teacher) {
    return this.http.post(`${environment.apiHost}/teachers`, teacher);
  }

  public viewTeacher() {
    return this.http.get(`${environment.apiHost}/teachers`);
  }


  public updateTeacher(id: string, teacher) {
    return this.http.put(`${environment.apiHost}/teachers/${id}`, teacher);
  }

  public deleteteacher(id) {
    return this.http.delete(`${environment.apiHost}/teachers/${id}`);
  }


}
