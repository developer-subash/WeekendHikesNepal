import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestinationCreateComponent } from './components/destination-create/destination-create.component';
import { DestinationDetailsComponent } from './components/destination-details/destination-details.component';
import { DestinationListComponent } from './components/destination-list/destination-list.component';
import { DestinationComponent } from './destination.component';

const routes: Routes = [
  {
    path: '',
    title: '',
    component: DestinationComponent,
    children: [
      {
        path: 'list',
        title: '',
        component: DestinationListComponent
      },
      {
        path: 'details',
        title: '',
        component: DestinationDetailsComponent
      },
      {
        path: 'create',
        title: '',
        component: DestinationCreateComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DestinationRoutingModule { }
