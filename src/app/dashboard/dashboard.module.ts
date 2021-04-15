import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { GlobalComponent } from './pages/global/global.component';



@NgModule({
  declarations: [GlobalComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    PrimeNgModule
  ]
})
export class DashboardModule { }
