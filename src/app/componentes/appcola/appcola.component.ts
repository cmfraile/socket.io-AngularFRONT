import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioappcolaService } from './servicioappcola.service';

@Component({
  selector: 'app-appcola',
  templateUrl: './appcola.component.html',
  styleUrls: ['./appcola.component.sass']
})
export class AppcolaComponent implements OnInit {

  digimones!:string[];
  tickets:any[] = [];
  
  constructor( public _sap:ServicioappcolaService , public _r:Router ){
    
    /*this._sap.traerpersonajes().subscribe(resp => this.digimones = resp);
    setInterval(() => {
      this.tickets.forEach((x:any) => {
        const restartiempo = () => {
          let secs = Math.round((Date.now() - Date.parse(x.fecha))/1000);
          return `${Math.floor(secs/60) < 10 ? '0' : ''}${Math.floor(secs/60)}:${(Math.round(secs%60) < 10 ? '0':'')}${Math.round(secs%60)}`
        }
        x.restante = restartiempo();
      });
    },15000);*/


  }

  crearticket(){
    /*ESTA LINEA FUNCIONA
    this._sap.socket.emit('crearticket',undefined,console.log);*/
    this._sap.socket.emit('crearticket',console.log);
  }

  atenderticket(puesto:string){
    console.log(`Atender ticket desde el puesto [${puesto}]`);
    /*if(this.tickets.length == 0){return};
    let comparativo:number = 0;
    let caso!:any;
    this.tickets.forEach( (x:any) => {
      let comblando = Date.now() - x.fecha.getTime();
      if(comblando > comparativo){caso = x};
    });
    this._sap.atendidos[puesto] = caso;
    this._sap.atendidos[puesto].horatencion = new Date();
    this.tickets.splice(this.tickets.indexOf(caso),1);*/
  }

  ngOnInit(): void {}

}
