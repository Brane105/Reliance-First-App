import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';
import { ActivatedRoute,Params } from '@angular/router';
import { Employee } from 'src/app/models/employee';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  _id: number | undefined;
  empname:string | undefined;
  dept:string | undefined;
  email:string | undefined;
  level:string | undefined;
  message = "Added Succefully";
  // public _id: number, public empname:string, public dept:string, public email:string, public level:string
  constructor(public router: Router, public emp: EmployeeService,public activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
  }
  addEmp(EmpForm:any) {
    this.emp.storeemp(EmpForm)
    .subscribe((response : any) => {
      alert("Added Succefully")
      // console.log(EmpForm)
    });
  }

}
