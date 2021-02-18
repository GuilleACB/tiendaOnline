import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title: string = 'Especialistas en cristal y carpintería metálica';

  paragraphs1: string = `<strong>Servicios de cristalería en Alicante</strong> desde 1978, dando solución a las 
                          necesidades de nuestros clientes`;

  paragraphs2: string = `Somos especialistas en cerramientos para terraza, puertas correderas de 
                         cristal y paneles de cristal a medida. También somos fabricantes e instaladores
                         de puertas y ventanas de cristal, mamparas de ducha y espejos para 
                         viviendas particulares.`;
                         
  constructor() { }

  ngOnInit(): void {
  }

}