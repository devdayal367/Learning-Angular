import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestmoduleComponent } from './testmodule.component';

const routes: Routes = [{ path: '', component: TestmoduleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestmoduleRoutingModule { }
