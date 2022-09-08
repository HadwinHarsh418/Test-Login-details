import { ContactComponent } from './contact/contact.component';
import { SingleBlogComponent } from './single-blog/single-blog.component';
import { BlogComponent } from './blog/blog.component';
import { TeacherComponent } from './teacher/teacher.component';
import { CourseComponent } from './course/course.component';
import { AboutComponent } from './about/about.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './services/auth-guard.service';
import { HomeFileComponent } from './home-file/home-file.component';

const routes: Routes = [

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  // { path: 'login', component: LoginComponent, canActivate: [AuthGuard]},
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'home',
    component: HomeLayoutComponent,canActivate: [AuthGuard],
    data: {
      title: 'Home'
    },
    children: [
      { path: '', component: HomeFileComponent},
      { path: 'about', component: AboutComponent},
      { path: 'teacher', component: TeacherComponent},
      { path: 'course', component: CourseComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'single-blog', component: SingleBlogComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'admin/dashboard', component: DashboardComponent , canActivate: [AuthGuard]},
      { path: 'edit-user', component: EditUserComponent , canActivate: [AuthGuard]},
      { path: 'delete-user', component: DeleteUserComponent,canActivate: [AuthGuard]},
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page

    ],
  },
  
  { path: 'register', component: RegisterComponent, },
  { path: 'forgot-password', component: ForgotPasswordComponent, },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
