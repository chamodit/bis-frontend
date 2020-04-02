import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './components/dashboard/student/student.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { OverviewComponent } from './components/dashboard/overview/overview.component';
import { AddSComponent } from './components/dashboard/student/add-s/add-s.component';
import { MatDatepickerModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AttendanceComponent } from './components/dashboard/attendance/attendance.component';
import { StudentAttendanceComponent } from './components/dashboard/attendance/student-attendance/student-attendance.component';
import { TeacherAttendanceComponent } from './components/dashboard/attendance/teacher-attendance/teacher-attendance.component';
import { FeesComponent } from './components/dashboard/fees/fees.component';
import { AddfeesComponent } from './components/dashboard/fees/addfees/addfees.component';
import { UpdatefeesComponent } from './components/dashboard/fees/updatefees/updatefees.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NoticeComponent } from './components/dashboard/notice/notice.component';
import { PublishNComponent } from './components/dashboard/notice/publish-n/publish-n.component';
import { ViewNComponent } from './components/dashboard/notice/view-n/view-n.component';
import { UpdateUnenrollComponent } from './components/dashboard/student/update-unenroll/update-unenroll.component';
import { TeacherComponent } from './components/dashboard/teacher/teacher.component';
import { AddTComponent } from './components/dashboard/teacher/add-t/add-t.component';
import { ManageTComponent } from './components/dashboard/teacher/manage-t/manage-t.component';
import { MarkStdAttnComponent } from './components/dashboard/attendance/student-attendance/mark-std-attn/mark-std-attn.component';
import { ViewStdAttnComponent } from './components/dashboard/attendance/student-attendance/view-std-attn/view-std-attn.component';
import { MarkTchAttnComponent } from './components/dashboard/attendance/teacher-attendance/mark-tch-attn/mark-tch-attn.component';
import { ViewTchAttnComponent } from './components/dashboard/attendance/teacher-attendance/view-tch-attn/view-tch-attn.component';
import { StudentfeesComponent } from './components/homepage/studentfees/studentfees.component';
import { UpdateTComponent } from './components/dashboard/teacher/manage-t/update-t/update-t.component';
import { NoticeService } from './services/notice.service';
import { StudentService } from './services/student.service';
import { SignupComponent } from './components/signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    DashboardComponent,
    LoginComponent,
    OverviewComponent,
    AddSComponent,
    AttendanceComponent,
    StudentAttendanceComponent,
    TeacherAttendanceComponent,
    FeesComponent,
    AddfeesComponent,
    UpdatefeesComponent,
    HomepageComponent,
    NoticeComponent,
    PublishNComponent,
    ViewNComponent,
    UpdateUnenrollComponent,
    TeacherComponent,
    AddTComponent,
    ManageTComponent,
    MarkStdAttnComponent,
    ViewStdAttnComponent,
    MarkTchAttnComponent,
    ViewTchAttnComponent,
    StudentfeesComponent,
    UpdateTComponent,
    
    SignupComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [
    MatDatepickerModule,
    NoticeService,
    StudentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
