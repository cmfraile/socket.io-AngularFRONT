import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivationStart } from '@angular/router';
import { io } from 'socket.io-client';

@Component({
  selector: 'app-callbacks',
  templateUrl: './callbacks.component.html',
  styleUrls: ['./callbacks.component.sass']
})
export class CallbacksComponent implements OnInit {

  socket = io('http://localhost:8000');
  aviso = new Audio('../../assets/noti.mp3');

  conexionstatus:boolean = false;
  data:any[] = [];

  constructor( public _l:Location ){
    this.aviso.load();
    this.socket.on('connect',() => {this.conexionstatus = true});
    this.socket.on('disconnect',() => {this.conexionstatus = false});
    this.socket.on('angular',() => {this.aviso.play()});
  }

  emision(){
    this.socket.emit('angular','mensaje de ida',(id:any) => {
      console.log(id,this.data);
      this.data.push(id);
    });
  }

  cts(){
    //this.socket.emit('cts',() => {this.aviso.play()});
    this.socket.emit('cts');
  };

  ngOnInit(): void {}

}
