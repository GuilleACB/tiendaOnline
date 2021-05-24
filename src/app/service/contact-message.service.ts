import { Injectable } from '@angular/core';
import { Message } from '../model/IMessage'
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, timeInterval, timestamp } from 'rxjs/operators';
import { InfMsg } from '../model/InfMsg';
import { stringify } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class ContactMessageService {

  private contactosDB: AngularFirestoreCollection<Message>;

  private response: String;

  constructor(private db: AngularFirestore) {
    this.contactosDB = db.collection<Message>('contacts');
  }

  /*
  * Añadimos un mensaje a la DB
  */
  async addMessaje(msg: Message): Promise<InfMsg> {
    try {
      await this.contactosDB.add(msg).catch(error => this.response = 'error: addMensaje' + error);
      return {
        status: 'OK',
        timeStamp: new Date().getTime().toString()
      }
    } catch (err) {
      console.log(Error, err);
      return {
        status: 'ERROR',
        timeStamp: new Date().getTime().toString(),
        msg: 'Mensaje: ' + err
      }
    }

  }

  getMessajes(msg: Message) {
    return this.contactosDB.get().subscribe(
      mensajes => {
        mensajes.forEach(doc => {
          console.log(doc.id, "=>", doc.data());
        })
      }
    );
  }
}
