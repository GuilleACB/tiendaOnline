import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ContactMessageService } from 'src/app/service/contact-message.service';
import swal from'sweetalert2';


@Component({
  selector: 'app-mensajes-contactos-borrados',
  templateUrl: './mensajes-contactos-borrados.component.html',
  styleUrls: ['./mensajes-contactos-borrados.component.scss']
})
export class MensajesContactosBorradosComponent implements OnInit {

  mensajes: any;
  resultConfirmation : any;

  constructor(private contactMessageServer: ContactMessageService) {}

  ngOnInit(): void {
    //recuperamos de la base de datos todos los mensajes nuevos
    this.getMessajes();


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

  onClickBorrar(mensaje:any){

    swal.fire({
      title: 'Estás seguro?',
      text: 'Sí borras el mensaje no se podrá recuperar',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Estoy conforme',
      cancelButtonText: 'No estoy conforme'
    }).then((result) => {

      this.resultConfirmation = result;

      if (result.value) {
        swal.fire(
          'Borrado!',
          'Mensaje borrado',
          'success'
        )
        this.contactMessageServer.deleteMessajeById(mensaje.key);
      } else if (result.dismiss === swal.DismissReason.cancel) {
        swal.fire(
          'Cancelado',
          'Mensaje no borrado',
          'error'
        )
      }
    })

  }
}
