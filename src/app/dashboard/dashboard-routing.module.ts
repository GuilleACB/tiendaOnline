import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GlobalComponent } from './pages/global/global.component';
import { DatosEmpresaComponent } from './pages/datos-empresa/datos-empresa.component';
import { MensajesContactoComponent } from './pages/mensajes-contacto/mensajes-contacto.component';
import { ConfiguracionComponent } from './pages/configuracion/configuracion.component';
import { MensajesContactosLeidosComponent } from './pages/mensajes-contactos-leidos/mensajes-contactos-leidos.component';




const routes: Routes = [
  { path: '', component: GlobalComponent },
  { path: 'datos-empresa', component: DatosEmpresaComponent },
  { path: 'mensajes-contacto', component: MensajesContactoComponent },
  { path: 'mensajes-contacto-leidos', component: MensajesContactosLeidosComponent },
  { path: 'configuracion', component: ConfiguracionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
