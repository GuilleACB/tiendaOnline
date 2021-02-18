import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss']
})
export class JumbotronComponent implements OnInit {

  backgroundImagen:String = 'https://handmadebase.com/wp-content/uploads/data/10-24.jpg';
  //backgroundImagen:String = '../../assets/img/ventana.jpg'
  headingText: string = 'CRISTALERAS';
  arrayTxt:string[] = ['CRISTALERAS','CERRAMIENTOS','FONTANERÍA','URGENCIAS'];
  subheadingText: String = 'Texto animado de ejemplo de una línea';
  constructor() { }

  ngOnInit(): void {
  }

}
