import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';
@Component({
  selector: 'app-updateemp',
  templateUrl: './updateemp.component.html',
  styleUrls: ['./updateemp.component.css']
})
export class UpdateempComponent implements OnInit {
  eid: number | undefined;
  empname:string | undefined;
  dept:string | undefined;
  email:string | undefined;
  level:string | undefined;
  msg?: String;
  constructor(public empServ: EmployeeService) { }

  ngOnInit(): void {
  }
  updateEmpProfile(editRef: any): void {
    this.empServ.updateEmp(editRef);
    this.msg = 'Your emp is updated!';
    alert(this.msg)
  }

}
