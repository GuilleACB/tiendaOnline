import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { STATUS } from 'src/app/model/IMessage';
import {formatDate} from '@angular/common';
import { ContactMessageService } from 'src/app/service/contact-message.service';


@Component({
  selector: 'app-mensajes-contacto',
  templateUrl: './mensajes-contacto.component.html',
  styleUrls: ['./mensajes-contacto.component.scss'],
})
export class MensajesContactoComponent implements OnInit {

  mensajes: any;
  dateNow: any = formatDate(new Date, 'yyyy-MM-dd','en');
  thisWeek:any = formatDate(new Date, 'yyyy-MM','en');

  constructor(private contactMessageServer: ContactMessageService) {}

  ngOnInit(): void {
    //recuperamos de la base de datos todos los mensajes nuevos
    this.getMessajes();
    console.log(this.dateNow);

  }

  //Actualizamo el estado del mensaje a LEIDO o BORRADO
  updateStatusById(key:string, status: STATUS) {
    this.contactMessageServer
      .updateMessajeById(key, { estado: status })
      .catch(err => console.log(err));
  }

  //recupero todos los mensajes de la base de datos
  getMessajes() {
    this.contactMessageServer
      .getMessajes()
      .snapshotChanges()
      .pipe(
        map(changes =>
          changes.map(c =>
            ({ key: c.payload.doc.id, ...c.payload.doc.data() })
          )
        )
      )
      .subscribe((mensajes) => {
        this.mensajes = mensajes;
      });
  }

  onClickVer(mensaje:any){
  console.log("Visto! ->"+ mensaje.key)
  this.updateStatusById(mensaje.key, 'LEIDO')
  }

  onClickBorrar(mensaje:any){
    console.log("Borrado! ->"+ mensaje.key)
    this.updateStatusById(mensaje.key, 'BORRADO')
  }

}
