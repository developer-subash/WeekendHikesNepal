import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  
  {
    path: '',
    title: '',
    component: AuthComponent,
    children: [
      {
          path: 'register',
          title: 'User Registration Page',
          component: RegisterComponent
      },
      {
          path: 'login',
          title: 'User Login Page',
          component: LoginComponent
      }
    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
