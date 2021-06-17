import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { GlobalComponent } from './pages/global/global.component';
import { DatosEmpresaComponent } from './pages/datos-empresa/datos-empresa.component';
import { MensajesContactoComponent } from './pages/mensajes-contacto/mensajes-contacto.component';
import { ConfiguracionComponent } from './pages/configuracion/configuracion.component';
import { MensajesContactosLeidosComponent } from './pages/mensajes-contactos-leidos/mensajes-contactos-leidos.component';



@NgModule({
  declarations: [
    GlobalComponent,
    DatosEmpresaComponent,
    MensajesContactoComponent,
    MensajesContactosLeidosComponent,
    ConfiguracionComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    PrimeNgModule
  ]
})
export class DashboardModule { }
