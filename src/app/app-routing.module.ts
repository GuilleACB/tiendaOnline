import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebLayoutComponent } from './layout/web-layout/web-layout.component';
import { WebModule } from './web/web.module';
import {DashboardLayoutComponent} from './layout/dashboard-layout/dashboard-layout.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { LoginComponent } from './shared/components/user/login/login.component';
import { Page404Component } from './shared/components/page404/page404.component';
import { AuthGuard } from './auth.guard';



const routes: Routes = [

  {
    path: '',
    redirectTo: 'web',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: '',
    component: WebLayoutComponent,
    children: [
      { path: 'web', loadChildren: () => WebModule }
    ]
  },
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      { path: 'dashboard', loadChildren: () => DashboardModule }
    ],
    canActivate: [AuthGuard]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
