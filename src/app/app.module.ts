// import { Routes } from '@angular/router';
// import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { Page404Component } from './pages/page404/page404.component';
import { EditBlogComponent } from './pages/blog/edit-blog/edit-blog.component';
import { SingleComponent } from './pages/single/single.component';

// const routes: Routes = [
//   { path: '', component: HomeComponent },
//   { path: 'blog', component: BlogComponent },
//   { path: 'blog/:id/:title', component: SingleComponent },
//   { path: 'blog/edit', component: EditBlogComponent },
//   { path: 'contacts', component: ContactsComponent },
//   { path: '**', component: Page404Component },
// ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
    ContactsComponent,
    Page404Component,
    EditBlogComponent,
    SingleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
