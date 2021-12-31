import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import arrayShuffle from 'array-shuffle';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicioappcolaService {
  
  constructor( private _hc:HttpClient ){}

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
