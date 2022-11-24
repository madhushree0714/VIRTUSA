import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DetailsComponent } from './details/details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

const routes: Routes = [
  {path:'departments', component:DepartmentListComponent},
  {path:'employees', component:EmployeeListComponent},
  {path:'details', component:DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponents = [DepartmentListComponent, EmployeeListComponent, DetailsComponent]
