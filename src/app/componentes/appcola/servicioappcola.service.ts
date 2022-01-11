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

  traerpersonajes(){
    return this._hc.get('https://digimon-api.herokuapp.com/api/digimon').pipe(
      map((resp:any) => {
        let acumular:string[] = [];
        resp.forEach((x:any) => {acumular.push(x.name)});
        acumular = arrayShuffle(acumular);
        return acumular;
      })
    );
  }

  traertickets(){
    this._hc.get(`${this.url}/api/tickets`).pipe(tap(console.log)).subscribe((resp:any) => {
      resp.forEach( (x:any) => {
        if(x.llamado == null && x.agente == null){this.tickets.push(x)}else{
          this.atendidos[`${x.agente}`] = x;
        };
      });
    });
  }
  
}
