import { Component, OnInit } from '@angular/core';
import { PoliticaDeCookies } from '../../../model/IPoliticaDeCookies';

@Component({
  selector: 'app-politica-de-cookies',
  templateUrl: './politica-de-cookies.component.html',
  styleUrls: ['./politica-de-cookies.component.scss']
})
export class PoliticaDeCookiesComponent implements OnInit {

  politicaDeCookies : PoliticaDeCookies;

  nombreDeEmpresa: string;
  correoDeEmpresa: string;
  

  constructor() {

    this.politicaDeCookies = this.getPoliticaDeCookies();

    this.nombreDeEmpresa = this.politicaDeCookies.nombreDeEmpresa;
    this.correoDeEmpresa = this.politicaDeCookies.correoDeEmpresa;

   }

  ngOnInit(): void {
  }

  getPoliticaDeCookies(): PoliticaDeCookies{
    return {
      nombreDeEmpresa:  '_mi empresa_',
      correoDeEmpresa:  '_mi correo de empresa_'
    };
  }

}
