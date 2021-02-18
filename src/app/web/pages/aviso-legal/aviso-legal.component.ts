import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aviso-legal',
  templateUrl: './aviso-legal.component.html',
  styleUrls: ['./aviso-legal.component.scss']
})
export class AvisoLegalComponent implements OnInit {
  denominacionSocial: string = 'rellenarEmpresa';
  nombreComercial: string = 'rellenarEmpresa';
  domicilio: string = 'rellenarEmpresa';
  cif: string = 'rellenarEmpresa';
  emailEmpresa: string = 'rellenarEmpresa';
  telefono: string = 'rellenarEmpresa';
  sitioWeb: string = 'url_Web';
  registroMercantil: string = 'RellenarEmpresa';
  tomoMercantil: string = 'RellenarEmpresa';
  libroMercantil: string = 'RellenarEmpresa';
  folioMercantil: string = 'RellenarEmpresa';
  hojaMercantil: string = 'RellenarEmpresa';
  inscripcionMercantil: string = 'RellenarEmpresa';
  nombreEmpresa: string = 'nombreEmpresa';
  ciudadTribunal: string = 'ciudadTribunal';
  constructor() { }

  ngOnInit(): void {
  }

}
