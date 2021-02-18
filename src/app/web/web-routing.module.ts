import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PoliticaDeCookiesComponent } from './pages/politica-de-cookies/politica-de-cookies.component';
import { PoliticaDePrivacidadComponent } from './pages/politica-de-privacidad/politica-de-privacidad.component';
import { AvisoLegalComponent } from './pages/aviso-legal/aviso-legal.component';

const routes: Routes = [{
  path: '',
  children: [
    { path: 'home', component: HomeComponent },
    { path: 'politica-de-cookies', component: PoliticaDeCookiesComponent },
    { path: 'politica-de-privacidad', component: PoliticaDePrivacidadComponent },
    { path: 'aviso-legal', component: AvisoLegalComponent },
    { path: '**', redirectTo:'home'}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }
