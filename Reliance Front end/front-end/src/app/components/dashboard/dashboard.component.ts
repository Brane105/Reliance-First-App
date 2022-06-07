import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UserService } from 'src/app/user.service'; 
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  profile!: Array<User>
  constructor(private _activatedRoute: ActivatedRoute, private _service: UserService,public router:Router) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe({
      next : (params: Params) => {
        this._service.getProfile(params['username']).subscribe({
          next: (data) => this.profile = data,
          error: (err) => console.log(err)
        })
      }
    })
  }

  deleteuser() {
    this._service.deleteuser(this.profile[0].username).subscribe((data)=>{
    console.log(this.profile[0].username)
     }),
     sessionStorage.removeItem('token');
      sessionStorage.removeItem('curUserName');
      this.router.navigate(['/login']);
  }
  logout(): void{
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('curUserName');
    this.router.navigate(['/login']);
  }
}
