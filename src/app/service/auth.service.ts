import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { User } from '../model/IUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }

  async loginUser(email: string, password: string): Promise<User> {
    try {
      const {user} = await this.afAuth.signInWithEmailAndPassword(email, password);
      return user;
    } catch (err) {
      console.log(Error, err);
    }
  }

  async logoutUser() {
    try {
      await this.afAuth.signOut();
    } catch (err) {
      console.log(Error, err);
    }
  }

  getCurrentUser(){
    return this.afAuth.currentUser;
  }
}
