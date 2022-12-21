import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog.component';
import { BlogCreateComponent } from './components/blog-create/blog-create.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';

const routes: Routes = [
  {
    path: '',
    title: '',
    component: BlogComponent,
    children: [
      {
        path: 'list',
        title: 'blog list page',
        component: BlogListComponent
      },
      {
        path: 'details',
        title: 'blog details',
        component: BlogDetailsComponent
      },
      {
        path: 'create',
        title: 'create blog',
        component: BlogCreateComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
