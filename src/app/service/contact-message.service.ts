import { Injectable } from '@angular/core';
import { Message } from '../model/IMessage';
import {AngularFirestore,AngularFirestoreCollection,} from '@angular/fire/firestore';
import { InfMsg } from '../model/InfMsg';


@Injectable({
  providedIn: 'root',
})
export class ContactMessageService {
  contactosDB: AngularFirestoreCollection<Message>;

  private response: String;

  constructor(private db: AngularFirestore) {
    this.contactosDB = db.collection<Message>('contacts');
  }

  /*
   * Añadimos un mensaje a la DB
   */
  async addMessaje(msg: Message): Promise<InfMsg> {

    msg.fecha_hora = Date.now();

    try {
      await this.contactosDB
        .add(msg)
        .catch((error) => (this.response = 'error: addMensaje' + error));
      return {
        status: 'OK',
        timeStamp: new Date().getTime().toString(),
      };
    } catch (err) {
      console.log(Error, err);
      return {
        status: 'ERROR',
        timeStamp: new Date().getTime().toString(),
        msg: 'Mensaje: ' + err,
      };
    }
  }

  /*
  *Recuperamos los mensajes
  */
  getMessajes(): AngularFirestoreCollection<Message> {
    return this.contactosDB;
  }


  /*
  *Actualizamos el mensaje por su Id
  */
  updateMessajeById(key: string, value: any): Promise<void> {
    return this.contactosDB.doc(key).update(value)
          .catch(err => console.log(err));
  }

  /*
  *Borramos el mensaje por su Id
  */
  deleteMessajeById(key: string): Promise<void> {
    return this.contactosDB.doc(key).delete()
    .catch(err => console.log(err));
  }




}
