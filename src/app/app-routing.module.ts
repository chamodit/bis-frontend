import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StudentComponent } from './components/dashboard/student/student.component';
import { OverviewComponent } from './components/dashboard/overview/overview.component';
import { AddSComponent } from './components/dashboard/student/add-s/add-s.component';
import { StudentAttendanceComponent } from './components/dashboard/attendance/student-attendance/student-attendance.component';
import { TeacherAttendanceComponent } from './components/dashboard/attendance/teacher-attendance/teacher-attendance.component';
import { AttendanceComponent } from './components/dashboard/attendance/attendance.component';
import { NoticeComponent } from './components/dashboard/notice/notice.component';
import { PublishNComponent } from './components/dashboard/notice/publish-n/publish-n.component';
import { ViewNComponent } from './components/dashboard/notice/view-n/view-n.component';
import { UpdateUnenrollComponent } from './components/dashboard/student/update-unenroll/update-unenroll.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'dashboard', 
    component: DashboardComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'overview' },
      { path: 'overview', component: OverviewComponent },
      { path: 'student', 
        component: StudentComponent,
        children: [
          { path: 'add', component: AddSComponent},
          { path: 'update', component: UpdateUnenrollComponent }
        ] },
      { path: 'attendance',
        component: AttendanceComponent,
        children: [
          { path: 'students', component: StudentAttendanceComponent},
          { path: 'teachers', component: TeacherAttendanceComponent},
        ] },
      { path: 'notice', 
        component: NoticeComponent,
        children: [
          { path: 'publish', component: PublishNComponent},
          { path: 'view', component: ViewNComponent}
        ] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
