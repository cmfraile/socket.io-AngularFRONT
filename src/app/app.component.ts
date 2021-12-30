import { Component } from '@angular/core';
import { io } from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'socketiofront';
  socket = io('http://localhost:8000');
  caso!:boolean;
  
  constructor(){
    this.socket.on('connect',() => { console.log("conectado");this.caso=true });
    this.socket.on('disconnect',() => { console.log("desconectado");this.caso=false });
  }

}
