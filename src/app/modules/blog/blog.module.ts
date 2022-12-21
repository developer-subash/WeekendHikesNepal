import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { BlogCreateComponent } from './components/blog-create/blog-create.component';


@NgModule({
  declarations: [
    BlogComponent,
    BlogListComponent,
    BlogDetailsComponent,
    BlogCreateComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
