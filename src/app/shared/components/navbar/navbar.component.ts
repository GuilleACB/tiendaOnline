import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public isLogged = false;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    if(this.authService.isLogger()){
      this.isLogged = true;
    }else{
      this.isLogged = true;
    }

  }

}
