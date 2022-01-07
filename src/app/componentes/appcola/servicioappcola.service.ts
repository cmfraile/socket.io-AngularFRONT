import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import arrayShuffle from 'array-shuffle';
import { io } from 'socket.io-client';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicioappcolaService {

  atendidos:any = {
    uno : {},
    dos : {},
    tres : {},
  };
  socket = io('http://localhost:8000');
  conexionstatus:boolean = false;
  
  
  constructor( private _hc:HttpClient ){
    this.socket.on('connect',() => {this.conexionstatus = true});
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
  
}
