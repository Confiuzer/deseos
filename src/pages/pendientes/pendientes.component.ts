import { Component, OnInit } from '@angular/core';
import { ListaDeseosService } from '../../services/lista-deseos.service';
import { NavController } from 'ionic-angular';
import { AgregarComponent } from '../agregar/agregar.component';
import { ListaDetalleComponent } from '../lista-detalle/lista-detalle.component';
import { PendientesPipe } from '../../pipes/pendientes.pipe';


@Component({
  selector: 'app-pendientes',
  templateUrl: 'pendientes.component.html',
})
export class PendientesComponent implements OnInit {
  constructor( private _listaDeseos:ListaDeseosService,
                private navCtrl:NavController ) {  }

  ngOnInit() {}

  irAgregar() {
    this.navCtrl.push(AgregarComponent);
  }

  verDetalle( lista, index ) {
    this.navCtrl.push(ListaDetalleComponent, { lista, index});
  }

}
