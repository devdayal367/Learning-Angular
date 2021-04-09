import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HttpComponent } from './http/http.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { StudDetailsComponent } from './modules/stud-details/stud-details.component';
import { StudListComponent } from './modules/stud-list/stud-list.component';

const routes: Routes = [
  {
    path:'header',
    component:HeaderComponent
  },
  { path:'', component:HomeComponent},
  { path: 'about', component:AboutComponent},
  { path:'contact',component:ContactComponent},
  { path:'gallery',component:GalleryComponent},
  { path:'dashboard',component:DashboardComponent},
  { path: 'studentlist',component:StudListComponent},
  { path: 'studentdetails',component:StudDetailsComponent},
  { path: 'httpdemo',component:HttpComponent},
  { path: 'testmodule', loadChildren: () => import('./testmodule/testmodule.module').then(m => m.TestmoduleModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
