import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { first } from 'rxjs/operators';
import { User } from '../model/IUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user: User;

  constructor(public afAuth: AngularFireAuth) { }

  async loginUser(email: string, password: string): Promise<User> {
    try {
      const {user} = await this.afAuth.signInWithEmailAndPassword(email, password);
      this.user = user;
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
    return  this.afAuth.authState.pipe(first()).toPromise();
  }

  isLogger(): boolean{
    //if (this.user && this.user.emailVerified) {
    if (this.user) {
      return true;
    } else {
      return false;
    }
  }

}
