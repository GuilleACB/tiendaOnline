import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ContactBoardComponent} from './pages/contact-board/contact-board.component';

const routes: Routes = [{
  path: '',
  children: [
    { path: 'contactBoard', component: ContactBoardComponent },
    { path: '**', redirectTo:'contactBoard'}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
