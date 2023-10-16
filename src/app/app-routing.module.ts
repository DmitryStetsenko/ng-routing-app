import { SingleComponent } from './pages/single/single.component';
import { EditBlogComponent } from './pages/blog/edit-blog/edit-blog.component';
import { Page404Component } from './pages/page404/page404.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { BlogComponent } from './pages/blog/blog.component';
import { HomeComponent } from './pages/home/home.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:id/:title', component: SingleComponent },
  { path: 'blog/edit', component: EditBlogComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
