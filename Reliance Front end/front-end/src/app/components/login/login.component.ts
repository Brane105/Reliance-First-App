import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _router:Router,private _builder:FormBuilder,public service:UserService) { }

  ngOnInit(): void {
  }
  // variable - default false
  public showPassword: boolean = false;
  errorMessage : string | undefined = undefined
  Message : string | undefined = undefined
  loginForm : FormGroup = this._builder.group({
    username : ['',Validators.required], password : ['',Validators.required]
  })
  
  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
  handleLogin(){
    let username = this.loginForm.controls['username'].value;
    let password = this.loginForm.controls['password'].value;
    this.service.userlogin(username,password).subscribe({
      next:(data)=>{
        console.log(data)
        this._router.navigate(['success',username])
        sessionStorage.setItem('curUserName',username);
        sessionStorage.setItem('token', 'user');
      },
      error:(err)=>{
        console.log(err)
        this.errorMessage = err.error.messsage
        alert("The User Doesnt Exist")
      }
    })
  }
}