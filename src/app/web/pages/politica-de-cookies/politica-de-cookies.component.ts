import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-politica-de-cookies',
  templateUrl: './politica-de-cookies.component.html',
  styleUrls: ['./politica-de-cookies.component.scss']
})
export class PoliticaDeCookiesComponent implements OnInit {


  nombreDeEmpresa: string = 'mi empresa';
  correoDeEmpresa: string = 'mi correo de empresa';
  

  constructor() { }

  ngOnInit(): void {
  }

}
