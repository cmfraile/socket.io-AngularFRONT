import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { io } from 'socket.io-client';

@Component({
  selector: 'app-callbacks',
  templateUrl: './callbacks.component.html',
  styleUrls: ['./callbacks.component.sass']
})
export class CallbacksComponent implements OnInit {

  socket = io('http://localhost:8000');
  conexionstatus:boolean = false;

  constructor( public _l:Location ){
    this.socket.on('connect',() => {this.conexionstatus = true});
    this.socket.on('disconnect',() => {this.conexionstatus = false});
  }

  ngOnInit(): void {}

}