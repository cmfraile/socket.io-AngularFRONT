import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioappcolaService } from './servicioappcola.service';

@Component({
  selector: 'app-appcola',
  templateUrl: './appcola.component.html',
  styleUrls: ['./appcola.component.sass']
})
export class AppcolaComponent implements OnInit {
  
  constructor( public _sap:ServicioappcolaService , public _r:Router ){

    setInterval(() => {
      this._sap.tickets.forEach((x:any) => {
        const restartiempo = () => {
          let secs = Math.round((Date.now() - Date.parse(x.creado))/1000);
          return `${Math.floor(secs/60) < 10 ? '0' : ''}${Math.floor(secs/60)}:${(Math.round(secs%60) < 10 ? '0':'')}${Math.round(secs%60)}`
        }
        x.restante = restartiempo();
      });
    },1000);

  }

  crearticket(){
    /*ESTA LINEA FUNCIONA
    this._sap.socket.emit('crearticket',undefined,console.log);*/
    this._sap.socket.emit('crearticket',async(ticket:any) => {
      ticket.restante = '00:00';
      this._sap.tickets.push(ticket);
    });
  }

  atenderticket(puesto:string){
    console.log(`Atender ticket desde el puesto [${puesto}]`);
    if(this._sap.tickets.length == 0){return}
    let comparativo:number = 0;
    let caso!:any;
    this._sap.tickets.forEach((x:any) => {
      let comblando = Date.now() - Date.parse(x.creado);
      if(comblando > comparativo){caso = x}
    });
    this._sap.socket.emit('atenderticket',{id:caso._id,puesto},async(callback:any) => {
      this._sap.atendidos[callback.agente] = callback;
    });


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
