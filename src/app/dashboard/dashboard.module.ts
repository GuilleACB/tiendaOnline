import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ContactBoardComponent } from './pages/contact-board/contact-board.component';


@NgModule({
  declarations: [ContactBoardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    PrimeNgModule
  ]
})
export class DashboardModule { }
