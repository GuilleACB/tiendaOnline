import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from "@angular/router";
import { User } from 'src/app/model/IUser';
import { AuthService } from '../../../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(public authService: AuthService, private router: Router) { }

  public isError = false;

  ngOnInit() { }

  async onLogin() {
    const { email, password } = this.loginForm.value;
    try {
      const user = await this.authService.loginUser(email, password);
      if (user) {
        //this.checkUserIsVerified(user);
        console.log('User: ',user.email);
        this.router.navigate(['dashboard']);
      }
    } catch (error) {
      console.log(error);
    }
  }

  /*
  private checkUserIsVerified(user: User) {
    if (user && user.emailVerified) {
      this.router.navigate(['dashboard']);
    } else {
      this.router.navigate(['web']);
    }
  }*/

  async onLogout() {
    try {
      await this.authService.logoutUser();
      this.router.navigate(['web']);
    } catch (error) {
      console.log(error);
    }
  }
}
