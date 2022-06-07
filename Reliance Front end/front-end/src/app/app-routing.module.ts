import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GetEmployeeComponent } from './components/get-employee/get-employee.component';
import { LoginComponent } from './components/login/login.component';
import { SearchComponent } from './components/search/search.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { UpdateempComponent } from './components/updateemp/updateemp.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:SignUpComponent},
  {path:'success/:username',component:DashboardComponent,children:[
    {path:"",component:GetEmployeeComponent},
    {path:'addEmp',component:AddEmployeeComponent},
    {path:'getEmp',component:GetEmployeeComponent},
    {path:'search',component:SearchComponent},
    {path:'update',component:UpdateempComponent}]},
    
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
