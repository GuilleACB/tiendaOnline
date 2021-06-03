import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { ContactMessageService } from 'src/app/service/contact-message.service';
import { NgIf } from '@angular/common';
import { map } from 'rxjs/operators';
import { MensajesContactosLeidosComponent } from 'src/app/dashboard/pages/mensajes-contactos-leidos/mensajes-contactos-leidos.component';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss'],
})
export class DashboardLayoutComponent implements OnInit {

  nMnsEntrada: number = 0;
  nMnsLeidos: number = 0;
  nMnsBorrados: number = 0;

  currentUser: string = '';

  constructor(
    public authService: AuthService,
    private router: Router,
    private contactMessageServer: ContactMessageService
  ) {}

  ngOnInit(): void {
    this.actualizarContadorMensajes()

    /*
    this.authService.getCurrentUser().then(res =>{
      this.currentUser = res.email;
    });
    */
  }

  async onLogout() {
    try {
      await this.authService.logoutUser();
      this.router.navigate(['web']);
    } catch (error) {
      console.log(error);
    }
  }

  actualizarContadorMensajes() {
    this.contactMessageServer
      .getMessajes()
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({
            key: c.payload.doc.id,
            ...c.payload.doc.data(),
          }))
        )
      )
      .subscribe((mensajes) => {

        this.nMnsLeidos = 0;
        this.nMnsEntrada = 0;
        this.nMnsBorrados = 0;

        mensajes.forEach(msn=>{
          switch(msn.estado){
            case 'LEIDO':{
              this.nMnsLeidos++;
              break;
            }
            case 'BORRADO':{
              this.nMnsBorrados++;
              break;
            }
            default:{
              this.nMnsEntrada++;
              break;
            }
          }
        })

      });
  }
}
