import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import arrayShuffle from 'array-shuffle';
import { io } from 'socket.io-client';
import { map , tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicioappcolaService {

  atendidos:any = {
    uno : {},
    dos : {},
    tres : {},
  };
  url:string = 'http://localhost:8000'
  socket = io(this.url);
  conexionstatus:boolean = false;
  tickets:any[] = [];

  constructor( private _hc:HttpClient ){
    
    this.socket.on('connect',() => {
      this.conexionstatus = true ;
      this.traertickets();
    });
    this.socket.on('disconnect',() => {this.conexionstatus = false});
  
  }

  traertickets(){
    this._hc.get(`${this.url}/api/tickets`).pipe(tap(console.log)).subscribe((resp:any) => {
      this.tickets = [];
      resp.forEach( (x:any) => {
        if(x.llamado == null && x.agente == null){this.tickets.push(x)}else{
          this.atendidos[`${x.agente}`] = x;
        };
      });
    });
  }
  
}
