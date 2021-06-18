import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { map } from 'rxjs/operators';
import { ContactMessageService } from 'src/app/service/contact-message.service';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.scss'],
})
export class GlobalComponent implements OnInit {
  mensajes: any;
  mensaje: any;
  mensaje2: any;
  nMnsEntrada: number = 0;
  nMnsLeidos: number = 0;
  chart: Chart;

  constructor(private contactMessageServer: ContactMessageService) { }

  async ngOnInit() {
    this.actualizarVistaGlobal();
  }

  actualizarVistaGlobal() {
    this.contactMessageServer
      .getMessajes()
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({
            key: c.payload.doc.id, ...c.payload.doc.data(),
          }))
        )
      )
      .subscribe((mensajes) => {
        this.actualizaMarcadores(mensajes);
        this.actualizaGrafica();
        console.log(mensajes);
      });
  }

  actualizaMarcadores(mensajes: any) {
    this.nMnsLeidos = 0;
    this.nMnsEntrada = 0;
    mensajes.forEach((msn: any) => {
      switch (msn.estado) {
        case 'LEIDO': {
          this.nMnsLeidos++;
          break;
        }
        default: {
          this.nMnsEntrada++;
          break;
        }
      }
    });
  }

  actualizaGrafica() {

    const etiquetas = ["Enero", "Febrero", "Marzo", "Abril"]

    const datosVentas2020 = {
      label: "Ventas por mes",
      data: [5000, 1500, 8000, 5102], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
      backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de fondo
      borderColor: 'rgba(54, 162, 235, 1)', // Color del borde
      borderWidth: 1,// Ancho del borde
    };

    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: etiquetas,
        datasets:[datosVentas2020]
      }
    });


  }
}
