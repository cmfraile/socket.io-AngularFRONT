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
  
  constructor( private _l:Location , public _sap:ServicioappcolaService ){
    this.test.load();
  }

  ngOnInit(): void {}

  back(){
    this.test.play();
  }

}
