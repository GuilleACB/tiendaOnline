import { Component, OnInit } from '@angular/core';
import { AvisoLegal } from '../../../model/IAvisoLegal';

@Component({
  selector: 'app-aviso-legal',
  templateUrl: './aviso-legal.component.html',
  styleUrls: ['./aviso-legal.component.scss']
})

export class AvisoLegalComponent implements OnInit {

  avisoLegal: AvisoLegal;

  denominacionSocial: String;
  nombreComercial: String;
  domicilio: String;
  cif:  String;
  emailEmpresa:  String;
  telefono: String;
  sitioWeb: String;
  registroMercantil: String;
  tomoMercantil: String;
  libroMercantil: String;
  folioMercantil: String;
  hojaMercantil: String;
  inscripcionMercantil: String;
  nombreEmpresa: String;
  ciudadTribunal: String;

  constructor() { 

    this.avisoLegal = this.getAvisoLegal();

    this.denominacionSocial =  this.avisoLegal.denominacionSocial;
    this.nombreComercial = this.avisoLegal.nombreComercial;
    this.domicilio = this.avisoLegal.domicilio;
    this.cif = this.avisoLegal.cif;
    this.emailEmpresa = this.avisoLegal.emailEmpresa;
    this.telefono = this.avisoLegal.telefono;
    this.sitioWeb = this.avisoLegal.sitioWeb;
    this.registroMercantil = this.avisoLegal.registroMercantil;
    this.tomoMercantil = this.avisoLegal.tomoMercantil;
    this.libroMercantil = this.avisoLegal.libroMercantil;
    this.folioMercantil = this.avisoLegal.folioMercantil;
    this.hojaMercantil = this.avisoLegal.hojaMercantil;
    this.inscripcionMercantil = this.avisoLegal.inscripcionMercantil;
    this.nombreEmpresa = this.avisoLegal.nombreComercial;
    this.ciudadTribunal = this.avisoLegal.ciudadTribunal;

  }

  ngOnInit(): void {
  }

  getAvisoLegal(): AvisoLegal{
    return {
      denominacionSocial: '_denominacionSocial_',
      nombreComercial: '_nombreComercial_',
      domicilio: '_domicilio_',
      cif: 'rellenarEmpresa',
      emailEmpresa: '_cif_',
      telefono: '_telefono_',
      sitioWeb: '_sitioWeb_',
      registroMercantil: '_registroMercantil_',
      tomoMercantil: '_tomoMercantil_',
      libroMercantil: '_libroMercantil_',
      folioMercantil: '_folioMercantil_',
      hojaMercantil: '_hojaMercantil_',
      inscripcionMercantil: '_inscripcionMercantil_',
      nombreEmpresa: '_nombreEmpresa_',
      ciudadTribunal: '_ciudadTribunal_'
    };
  }

}
