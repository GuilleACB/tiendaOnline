import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PoliticaDeCookiesComponent } from './pages/politica-de-cookies/politica-de-cookies.component';
import { PoliticaDePrivacidadComponent } from './pages/politica-de-privacidad/politica-de-privacidad.component';
import { AvisoLegalComponent } from './pages/aviso-legal/aviso-legal.component';

import { QueHacemosComponent } from './pages/que-hacemos/que-hacemos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { QhCristaleriaComponent } from './pages/qh-cristaleria/qh-cristaleria.component';
import { QhElectricidadComponent } from './pages/qh-electricidad/qh-electricidad.component';
import { QhPinturaComponent } from './pages/qh-pintura/qh-pintura.component';
import { QharquitecturaComponent } from './pages/qharquitectura/qharquitectura.component';
import { QhtoldosComponent } from './pages/qhtoldos/qhtoldos.component';
import { QhFontaneriaComponent } from './pages/qh-fontaneria/qh-fontaneria.component';




const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'politica-de-cookies', component: PoliticaDeCookiesComponent },
  { path: 'politica-de-privacidad', component: PoliticaDePrivacidadComponent },
  { path: 'aviso-legal', component: AvisoLegalComponent },

  // Que hacemos: 
  { path: 'que-hacemos', component: QueHacemosComponent }, // carpinteria metalica
  { path: 'app-contacto', component: ContactoComponent },
  { path: 'app-qh-electricidad', component: QhElectricidadComponent },
  { path: 'app-qh-pintura', component: QhPinturaComponent },
  { path: 'app-qh-arquitectura', component: QharquitecturaComponent },
  { path: 'app-qh-toldos', component: QhtoldosComponent },
  { path: 'app-qh-cristaleria', component: QhCristaleriaComponent },
  { path: 'app-qh-fontaneria', component: QhFontaneriaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }
