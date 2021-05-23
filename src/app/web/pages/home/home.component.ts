import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title: string = 'Especialistas en cristal y carpintería metálica';

  paragraphs1: string = `<strong>Servicios de cristalería en Alicante</strong> en 1978 nace CRISTALERÍA SOL, un negocio familiar
  y que, con una trayectoria profesional dedicada a la industria del vidrio de más de 40 años, que ha sabido perdurar en el tiempo y transmitir
  todos aquellos valores que nosotros hemos compartido con todos nuestros clientes a lo largo de todos estos años y que tanto nos caracterizan, calidad, profesionalidad
  y sobre todo una atención personalizada.
  `;

  paragraphs2: string = ` Todos estos años de experiencia nos han servido para conocer de primera mano, las necesidades de todos nuestros clientes, por lo que después de reunir
  un gran equipo de profesionales, hemos creado nuestra empresa SOLFETER REFORMA-HOGAR, en la cual ofrecemos un gran abanico de diferentes gremios tan demandados hoy en día.`;
  
  paragraphs3: string = `SOLFETER REFORMA-HOGAR, nace con la finalidad de proporcionar a nuestros clientes soluciones prácticas en todo tipo de reformas de hogar, apostando
  por un trato personalizado, utilizando materiales de primera calidad y sobre todo y los más importante para nosotros, ofrecer a nuestros, ofrecer a nuestros clientes un equipo de profesionales
  cualificados y con una gran experiencia dentro del sector de reformas de hogar.`;

  /*paragraphs4: string = `Un sueño, una ilusión, esa reforma que tienes penado hacer en tu hogar y que no haces porque no encuentras tiempo ni profesionales, SOLFETER REFORMA-HOGAR
  es tu solución, cuentanos tu sueño, cuentanos tu ilusión, hablanos de esa reforma aplazada en el tiempo. Nosotros convertimos tus sueños y ilusiones en realidad.`;*/

  colaborador_logo: string = '../../assets/img/Ocaso_logo.JPG';
  colaborador_logo_des: string = 'Descripción colaboración';
  colaborador_2_logo: string = '../../assets/img/SantaLucia_logo.JPG';
  colaborador_2_logo_des: string = 'Descripción colaboración';


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  clickQueHacemos(event) {
    let idAttr : string;
    idAttr = event.target.attributes.id.nodeValue;
    console.log(idAttr);

    this.router.navigate(['web/que-hacemos'], { queryParams: { filter:idAttr}} );
    
  }

}
