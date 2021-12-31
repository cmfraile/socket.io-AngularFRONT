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
  mensajes:string[] = [];
  caso!:boolean;
  
  constructor(){
    this.socket.on('connect',() => { console.log("conectado");this.caso=true });
    this.socket.on('disconnect',() => { console.log("desconectado");this.caso=false });
    this.socket.on('vueltamsg',(msg:string) => { this.mensajes.unshift(msg) });
  }

  enviar(caja:string){
    console.log("ENVIADA");
    this.socket.emit('angularmsg',{fecha:Date(),caja},(id:string) => {
      console.log("DESDE EL SERVER",id);
    });
  }

}
