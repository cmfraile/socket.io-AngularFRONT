import { Component,OnInit} from '@angular/core';
import {Location} from '@angular/common';
import { ServicioappcolaService } from '../../servicioappcola.service';

@Component({
  selector: 'app-vistausuario',
  templateUrl: './vistausuario.component.html',
  styleUrls: ['./vistausuario.component.sass']
})
export class VistausuarioComponent implements OnInit {

  aviso = new Audio('../../assets/noti.mp3');
  
  estado:any = {uno:false,dos:false,tres:false}

  constructor( public _l:Location , public _sap:ServicioappcolaService ){
    
    this.aviso.load();

    setInterval(() => {
      let at = this._sap.atendidos;
      for(let x in at){
        if(at[x].llamado == undefined){this.estado[x] = false ; return};
        let contador = Math.floor((Date.now() - Date.parse(at[x].llamado))/1000);
        if(contador >= 30){this.estado[x] = false}else{this.estado[x] = true};
      }
    },1000);

    this._sap.socket.on('alarmaticketvuelta',async() => {
      this.aviso.play();
      this._sap.traertickets();
    });
  
  }

  ngOnInit(): void {}

}
