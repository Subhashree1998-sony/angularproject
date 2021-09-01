import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { StudentComponent } from './student/student.component';
import { RegistrationComponent } from './registration/registration.component';
import { AddUserComponent } from './adduser/adduser.component';
const routes: Routes = [
  {path: "subharoute", component: LoginComponent},
  {path: "subharoute1", component: StudentComponent},
  {path: "subharoute2", component: RegistrationComponent},
   {path: "subharoute3", component: AddUserComponent}
  
  
 // {path: "", component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
