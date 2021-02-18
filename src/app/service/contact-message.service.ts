import { Injectable } from '@angular/core';
import {Message} from '../model/message'
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactMessageService {

  //Este contendra una Coleccion de Jugadores de la DB.
  private contactosDB: AngularFirestoreCollection<Message>;

  constructor(private db: AngularFirestore) {

    //? Accedemos a la base de datos de firebase.
    //? Vamos a acceder la lista de jugadores en la db.
    //? y se implementa la funcionalidad en el segundo argumento.
    //? La referencia que es nuestra lista de jugadores, se va a ordenar por nombre.
    this.contactosDB = db.collection<Message>('contacts');
   }

   addMessaje(msg: Message) {
    //?Con esto FireBase se encarga de todo,
    //?no hay que pensar en endpoints o si esta o no creada la tabla.
    //?Adicionamos un nuevo record a la tabla.
    return this.contactosDB.add(msg);
  }
}
