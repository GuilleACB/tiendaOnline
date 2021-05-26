import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebRoutingModule } from './web-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { PoliticaDeCookiesComponent } from './pages/politica-de-cookies/politica-de-cookies.component';
import { PoliticaDePrivacidadComponent } from './pages/politica-de-privacidad/politica-de-privacidad.component';
import { AvisoLegalComponent } from './pages/aviso-legal/aviso-legal.component';
import { SharedModule } from '../shared/shared.module';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { QueHacemosComponent } from './pages/que-hacemos/que-hacemos.component';
import { QhFontaneriaComponent } from './pages/qh-fontaneria/qh-fontaneria.component';
import { QhCristaleriaComponent } from './pages/qh-cristaleria/qh-cristaleria.component';
import { QhPinturaComponent } from './pages/qh-pintura/qh-pintura.component';
import { QhElectricidadComponent } from './pages/qh-electricidad/qh-electricidad.component';
import { QharquitecturaComponent } from './pages/qharquitectura/qharquitectura.component';
import { QhtoldosComponent } from './pages/qhtoldos/qhtoldos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';


@NgModule({
  declarations: [
    HomeComponent,
    PoliticaDeCookiesComponent,
    PoliticaDePrivacidadComponent,
    AvisoLegalComponent,
    QueHacemosComponent,
    QhFontaneriaComponent,
    QhCristaleriaComponent,
    QhPinturaComponent,
    QhElectricidadComponent,
    QharquitecturaComponent,
    QhtoldosComponent,
    ContactoComponent],
  imports: [
    CommonModule,
    WebRoutingModule,
    SharedModule,
    PrimeNgModule
  ]
})
export class WebModule { }
