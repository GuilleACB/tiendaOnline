import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GlobalComponent } from './pages/global/global.component';



const routes: Routes = [ { path: '', component: GlobalComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
