import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { PoliticaDePrivacidad } from '../../../model/IPoliticaDePrivacidad';

@Component({
  selector: 'app-politica-de-privacidad',
  templateUrl: './politica-de-privacidad.component.html',
  styleUrls: ['./politica-de-privacidad.component.scss']
})
export class PoliticaDePrivacidadComponent implements OnInit {

  politicaDePrivacidad : PoliticaDePrivacidad;

  nombreEmpresa: string;
  sitioWeb: string;
  correoEmpresa: string;
  facebook: string;

  constructor() { 

    this.politicaDePrivacidad = this.getPoliticaDePrivacidad();

    this.nombreEmpresa = this.politicaDePrivacidad.nombreEmpresa;
    this.sitioWeb = this.politicaDePrivacidad.sitioWeb;
    this.correoEmpresa = this.politicaDePrivacidad.correoEmpresa;
    this.facebook = this.politicaDePrivacidad.facebook;

  }

  ngOnInit(): void {
  }

  getPoliticaDePrivacidad(): PoliticaDePrivacidad{
    return {
      nombreEmpresa:  '_nombreEmpresa_',
      sitioWeb: '_urlWeb_',
      correoEmpresa:  '_correoEmpresa_',
      facebook:  '_facebookUrl_'
    };
  }

}
