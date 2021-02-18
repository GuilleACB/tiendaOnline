import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-politica-de-privacidad',
  templateUrl: './politica-de-privacidad.component.html',
  styleUrls: ['./politica-de-privacidad.component.scss']
})
export class PoliticaDePrivacidadComponent implements OnInit {

  nombreEmpresa: string = '/nombreEmpresa/';
  sitioWeb: string = '/urlWeb/';
  correoEmpresa: string = '/correoEmpresa/';
  facebook: string = '/facebookUrl/';

  constructor() { }

  ngOnInit(): void {
  }

}
