import { Component,OnInit} from '@angular/core';
import {Location} from '@angular/common';
import { ServicioappcolaService } from '../../servicioappcola.service';

@Component({
  selector: 'app-vistausuario',
  templateUrl: './vistausuario.component.html',
  styleUrls: ['./vistausuario.component.sass']
})
export class VistausuarioComponent implements OnInit {

  constructor( private _l:Location , public _sap:ServicioappcolaService ){}

  ngOnInit(): void {}

  back(){
    //this._l.back();
    const test = new Audio('../../assets/noti.mp3'); test.load() ; test.play();
  }

}
