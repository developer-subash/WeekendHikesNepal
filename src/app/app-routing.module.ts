import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    title: 'home page',
    component: DashboardComponent
  },
  {
    path: 'auth',
    title: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'blog',
    title: 'blog',
    loadChildren: () => import ('./modules/blog/blog.module').then(m => m.BlogModule)
  },
  {
    path: 'destination',
    title: 'destination',
    loadChildren: () => import ('./modules/destination/destination.module').then(m => m.DestinationModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
