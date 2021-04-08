import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';

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
  { path: 'testmodule', loadChildren: () => import('./testmodule/testmodule.module').then(m => m.TestmoduleModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
