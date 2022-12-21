import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DestinationRoutingModule } from './destination-routing.module';
import { DestinationComponent } from './destination.component';
import { DestinationListComponent } from './components/destination-list/destination-list.component';
import { DestinationCreateComponent } from './components/destination-create/destination-create.component';
import { DestinationDetailsComponent } from './components/destination-details/destination-details.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DesinationService } from './services/desination.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TagInputModule } from 'ngx-chips';
import { NgSelectModule } from '@ng-select/ng-select';
@NgModule({
  declarations: [
    DestinationComponent,
    DestinationListComponent,
    DestinationCreateComponent,
    DestinationDetailsComponent,
  ],
  imports: [
    CommonModule,
    DestinationRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    TagInputModule,
    NgSelectModule
  ],
  providers: [DesinationService],
})
export class DestinationModule {}
