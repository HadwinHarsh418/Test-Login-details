import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';

import { MaterialModule } from '../material/material.module';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EntryComponent } from './entry/entry.component';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { ResetPasswordComponent } from '../reset-password/reset-password.component';


const routes: Routes = [
 { path: '',   component: EntryComponent , children :[
   { path: '', component: LoginComponent}
 ] }
];

@NgModule({
  declarations: [
    LoginComponent,
    EntryComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    MaterialModule,
    NgbModule,
    RouterModule.forChild(routes)
  ],
  providers: [],
  entryComponents: []
})
export class AuthModule { }
