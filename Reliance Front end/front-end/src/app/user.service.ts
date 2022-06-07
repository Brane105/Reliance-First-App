import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public _http: HttpClient) { }

  //register profile
  public storeProfile(profile:any):Observable<any>{
    return this._http.post('http://localhost:8080/signUp',profile)
  }
  userlogin(username:string,password:string):Observable<User[]>{
    return this._http.get<User[]>(`http://localhost:8080/user/${username}/${password}`)
  }
  public getProfile(username:String):Observable<User[]>{
    return this._http.get<User[]>(`http://localhost:8080/user/${username}`);
  }
  public getusers():Observable<any>{
    return this._http.get(`http://localhost:8080/users`);
  }
  public deleteuser(username:any):Observable<any>{
    return this._http.delete(`http://localhost:8080/user/delete/${username}`);
  }
} 
