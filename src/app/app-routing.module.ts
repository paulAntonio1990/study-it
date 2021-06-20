import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {CoursesDashboardComponent} from "./components/courses-dashboard/courses-dashboard.component";
import {AboutComponent} from "./components/about/about.component";
import {CourseDetailsComponent} from "./components/courses-dashboard/course-details/course-details.component";
import {CourseDescriptionComponent} from "./components/courses-dashboard/course-details/course-description/course-description.component";
import {CourseContentComponent} from "./components/courses-dashboard/course-details/course-content/course-content.component";
import {CourseTutoringDashboardComponent} from "./components/courses-dashboard/course-details/course-tutoring-dashboard/course-tutoring-dashboard.component";
import {CourseForumComponent} from "./components/courses-dashboard/course-details/course-forum/course-forum.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'courses-dashboard', component: CoursesDashboardComponent},
  {path: 'courses-dashboard/:courseId',
    component: CourseDetailsComponent,
    children: [
      {path: '', redirectTo: 'description', pathMatch: 'full'},
      {path: 'description', component: CourseDescriptionComponent},
      {path: 'content', component: CourseContentComponent},
      {path: 'tutoring-dashboard', component: CourseTutoringDashboardComponent},
      {path: 'forum', component: CourseForumComponent}
    ]
  },
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
