import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/employee.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  emps: Employee[] = [];
  errorMessage : any
  name : any
  public displayedColumns = ['_id', 'empname', 'dept', 'email', 'level',"update","Delete" ];
  //the source where we will get the data
  public dataSource = new MatTableDataSource<Employee>();
  constructor(public _service:EmployeeService,public router : ActivatedRoute) { }
  ngOnInit(): void {
    this.getemps();
  }
/**
   * This method returns students details
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
 updateEmpProfile(editRef: any): void {
  this._service.updateEmp(editRef);
}
getContactByName(name:any){
  this.dataSource.filter = name.trim()
}
} 