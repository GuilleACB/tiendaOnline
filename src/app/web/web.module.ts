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


@NgModule({
  declarations: [
    HomeComponent,
    PoliticaDeCookiesComponent,
    PoliticaDePrivacidadComponent,
    AvisoLegalComponent,
    QueHacemosComponent],
  imports: [
    CommonModule,
    WebRoutingModule,
    SharedModule,
    PrimeNgModule
  ]
})
export class WebModule { }
