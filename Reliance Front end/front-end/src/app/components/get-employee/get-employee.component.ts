import { Component, OnInit ,Input} from '@angular/core';
import { Employee } from 'src/app/models/employee';
import {MatTableDataSource} from "@angular/material/table";
import { EmployeeService } from 'src/app/employee.service';
import { ActivatedRoute,Params } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-get-employee',
  templateUrl: './get-employee.component.html',
  styleUrls: ['./get-employee.component.css']
})
export class GetEmployeeComponent implements OnInit {
  @Input()
  emps: Employee[] = [];
  errorMessage : any
  name : any
  public displayedColumns = ['_id', 'empname', 'dept', 'email', 'level',"update","Delete" ];
  //the source where we will get the data
  public dataSource = new MatTableDataSource<Employee>();
  constructor(public _service:EmployeeService,public router : ActivatedRoute,public _router:Router) { }
  ngOnInit(): void {
    this.getemps();
  }
/**
   * This method returns employees details
   */
 getemps(){
  this._service.getemps()
    .subscribe((res)=>{
      console.log(res);
      this.dataSource.data = res;
    })
}
deleteEmp(id:any) { 
  this._service.DeletebyId(id)
  .subscribe((response: any) => {
    this.emps = []
    this.ngOnInit();
    console.log(id)
  });
 }

getContactByName(name:any){
  this.dataSource.filter = name.trim()
}
// getemByName(name:any){
//   if(name.trim().length > 0){
//     this._service.getempbyname(name).subscribe(
//       success => {
//         this.errorMessage = undefined; 
//         this.dataSource.data = success;
//       }, 
//       err => {
//         this.errorMessage = err.error.message; 
//         this.dataSource.data = []
//       }
//       ); 
//   } 
//   else{
//     this.ngOnInit();
//   }   
// }
}
