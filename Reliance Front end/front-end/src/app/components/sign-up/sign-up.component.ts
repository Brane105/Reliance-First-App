import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup ,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  public showPassword: boolean = false;
  constructor(private service:UserService,private _builder:FormBuilder,private _router : Router) { }

  profileForm : FormGroup = this._builder.group({
    username :['',Validators.required],
    password :['',Validators.required]
  })
  errorMessage : any | undefined = undefined
  ngOnInit(): void {
  }

  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
  handleSubmit(){
    this.service.storeProfile(this.profileForm.value).subscribe({
      next:(data) =>{
        console.log(data)
        alert("Stored Successfully")
        this._router.navigate(["login"])
       },
      error:(err) => {
        this.errorMessage = err.error.messsage
        this.profileForm.reset()
      }
    })
}
}