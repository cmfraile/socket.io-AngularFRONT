import { Component, OnInit } from '@angular/core';
import { ServicioappcolaService } from './servicioappcola.service';

@Component({
  selector: 'app-appcola',
  templateUrl: './appcola.component.html',
  styleUrls: ['./appcola.component.sass']
})
export class AppcolaComponent implements OnInit {

  constructor( private _sap:ServicioappcolaService ){
    this._sap.traerpersonajes().subscribe(console.log);
  }

  ngOnInit(): void {}

}
