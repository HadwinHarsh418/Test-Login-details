import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')]);

  hide = true;

  user : any = {};

  constructor(private fb: FormBuilder , private apiService : ApiService , private authService : AuthService
    , private router: Router , private toastr: ToastrService) {

  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: this.email,
      password: this.password,
    });
  }

  onSubmit(){
    console.log(this.loginForm.value)
    this.apiService.login(this.loginForm.value).subscribe((response : any) => {
      this.authService.loginSession(response.body)
      console.log(response)
      if(response['error'] == false){
        this.toastr.success(response.msg);
        this.router.navigate(['/home'])
      }
      else if(response['error'] == true){
        this.toastr.error(response.msg);
      }
    })
  }

  getErrorMessage() {
    if (this.email.hasError('required')&& this.password.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : ''  && this.password.hasError('password') ? 'Password format is incorrect' : '';
  }

}
