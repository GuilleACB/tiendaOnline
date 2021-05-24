import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GlobalComponent } from './pages/global/global.component';
import { DatosEmpresaComponent } from './pages/datos-empresa/datos-empresa.component';
import { MensajesContactoComponent } from './pages/mensajes-contacto/mensajes-contacto.component';
import { ConfiguracionComponent } from './pages/configuracion/configuracion.component';



const routes: Routes = [ 
  { path: '', component: GlobalComponent },
  { path: 'datos-empresa', component: DatosEmpresaComponent },
  { path: 'mensajes-contacto', component: MensajesContactoComponent },
  { path: 'configuracion', component: ConfiguracionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
