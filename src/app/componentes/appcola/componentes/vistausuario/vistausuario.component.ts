import { Component,OnInit} from '@angular/core';
import {Location} from '@angular/common';
import { ServicioappcolaService } from '../../servicioappcola.service';

@Component({
  selector: 'app-vistausuario',
  templateUrl: './vistausuario.component.html',
  styleUrls: ['./vistausuario.component.sass']
})
export class VistausuarioComponent implements OnInit {

  test = new Audio('../../assets/noti.mp3');
  estado:any = {uno:false,dos:false,tres:false}

  constructor( private _l:Location , public _sap:ServicioappcolaService ){
    this.test.load();
    setInterval(() => {
      let at = this._sap.atendidos;
      for(let x in at){
        if(at[x].horatencion == undefined){this.estado[x] ; return};
        let contador = Math.floor((Date.now() - Date.parse(at[x].horatencion))/1000);
        if(contador >= 30){this.estado[x] = false}else{this.estado[x] = true};
      }
    },1000);
  }

  ngOnInit(): void {}

  back(){
    this._l.back();
    //this.test.play();
  }

}
