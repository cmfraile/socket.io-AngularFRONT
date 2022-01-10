import { Component, OnInit } from '@angular/core';
import { io } from 'socket.io-client';

@Component({
  selector: 'app-fundamentos',
  templateUrl: './fundamentos.component.html',
  styleUrls: ['./fundamentos.component.sass']
})
export class FundamentosComponent implements OnInit {

  socket = io('http://localhost:8000');
  mensajes:string[] = [];
  caso!:boolean;
  
  constructor(){
    this.socket.on('connect',() => { console.log("conectado");this.caso=true });
    this.socket.on('disconnect',() => { console.log("desconectado");this.caso=false });
    this.socket.on('vueltamsg',(msg:string) => { console.log(msg) });
  }

  enviar(caja:string){

    this.socket.emit('angularmsg',{fecha:Date(),caja},(id:string) => {
      console.log("DESDE EL SERVER",id);
    });
    
    //this.socket.emit('angularmsg',{fecha:Date(),caja},console.log);
  
  }

  ngOnInit(): void {
  }

}
