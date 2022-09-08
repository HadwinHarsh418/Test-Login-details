import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { ToastrModule } from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { AboutComponent } from './about/about.component';
import { CourseComponent } from './course/course.component';
import { TeacherComponent } from './teacher/teacher.component';
import { BlogComponent } from './blog/blog.component';
import { SingleBlogComponent } from './single-blog/single-blog.component';
import { ContactComponent } from './contact/contact.component';
import { HomeFileComponent } from './home-file/home-file.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    EditUserComponent,
    DeleteUserComponent,
    PageNotFoundComponent,
    HomeLayoutComponent,
    AboutComponent,
    CourseComponent,
    TeacherComponent,
    BlogComponent,
    SingleBlogComponent,
    ContactComponent,
    HomeFileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ToastrModule.forRoot(),
    NgbModule,
  ],
  providers: [AuthGuard,AuthService],
  bootstrap: [AppComponent],
  entryComponents: [EditUserComponent,DeleteUserComponent]
})
export class AppModule { }
