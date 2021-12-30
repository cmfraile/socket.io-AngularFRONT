import { Component } from '@angular/core';
import { io,Socket} from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'socketiofront';
  socket = io('http://localhost:8000');
  
  constructor(){
    this.socket.on('connect',() => {
      console.log("conectado");
    });
  }

}
