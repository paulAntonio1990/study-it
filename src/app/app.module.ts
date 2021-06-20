import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import { HomeComponent } from './components/home/home.component';
import { CoursesDashboardComponent } from './components/courses-dashboard/courses-dashboard.component';
import { AboutComponent } from './components/about/about.component';
import {MatCarouselModule} from "@ngmodule/material-carousel";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { CourseCardComponent } from './components/courses-dashboard/course-card/course-card.component';
import {HttpClientModule} from "@angular/common/http";
import {MatButtonModule} from "@angular/material/button";
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from "@angular/material/dialog";
import { AddCourseDialogComponent } from './components/courses-dashboard/add-course-dialog/add-course-dialog.component';
import {MatSelectModule} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";
import { ErrorMessageDisplayComponent } from './components/error-message-display/error-message-display.component';
import { CoursePreviewDialogComponent } from './components/courses-dashboard/course-preview-dialog/course-preview-dialog.component';
import {MatDividerModule} from "@angular/material/divider";
import {MatListModule} from "@angular/material/list";
import { CourseDetailsComponent } from './components/courses-dashboard/course-details/course-details.component';
import { CourseDescriptionComponent } from './components/courses-dashboard/course-details/course-description/course-description.component';
import { CourseTutoringDashboardComponent } from './components/courses-dashboard/course-details/course-tutoring-dashboard/course-tutoring-dashboard.component';
import { CourseForumComponent } from './components/courses-dashboard/course-details/course-forum/course-forum.component';
import { CourseContentComponent } from './components/courses-dashboard/course-details/course-content/course-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoursesDashboardComponent,
    AboutComponent,
    CourseCardComponent,
    AddCourseDialogComponent,
    ErrorMessageDisplayComponent,
    CoursePreviewDialogComponent,
    CourseDetailsComponent,
    CourseDescriptionComponent,
    CourseTutoringDashboardComponent,
    CourseForumComponent,
    CourseContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCarouselModule.forRoot(),
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatListModule
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
