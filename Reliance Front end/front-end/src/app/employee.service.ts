import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './models/employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseURL = "http://localhost:8080/emp"
  constructor(public _http:HttpClient) { }
  //register emps
    public storeemp(emps:any):Observable<Employee[]>{
      return this._http.post<Employee[]>(this.baseURL+'/store',emps)
    }
    //get profile
    public getemps():Observable<Employee[]>{
      return this._http.get<Employee[]>(this.baseURL+'/getEmployees')
    }
    public getempbyname(name:any):Observable<Employee[]>{
      return this._http.get<Employee[]>(`${this.baseURL}/getEmployeeById/${name}`)
    }
    public DeletebyId(id:any):Observable<Employee[]>{
      return this._http.delete<Employee[]>(`${this.baseURL}/deleteEmpById/${id}`)
    }
    updateEmp(editRef: any): void {
      console.log('updateinSVCfileReached');
      this._http
        .put('http://localhost:8080/emp/editEmployee', editRef, {
          responseType: 'text',
        })
        .subscribe(
          (result) => console.log(result),
          (error) => console.log(error)
        );
    }
}
