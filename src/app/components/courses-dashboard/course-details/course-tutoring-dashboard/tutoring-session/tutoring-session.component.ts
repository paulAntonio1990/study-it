import {Component, OnInit} from '@angular/core';
import {Stomp} from "@stomp/stompjs";
import * as SockJS from "sockjs-client";

@Component({
  selector: 'app-tutoring-session',
  templateUrl: './tutoring-session.component.html',
  styleUrls: ['./tutoring-session.component.scss']
})
export class TutoringSessionComponent implements OnInit {
  messages: string[] = [];
  newMessage: any;
  disabled = true;

  private stompClient: any;

  constructor() {
  }

  ngOnInit(): void {
    this.connect();
  }

  setConnected(connected: boolean) {
    this.disabled = !connected;
    if (connected) {
      this.messages = [];
    }
  }

  connect() {
    const socket = new SockJS('http://localhost:8080/tutoring-session');
    this.stompClient = Stomp.over(socket);
    const _this = this;
    this.stompClient.connect({}, function (frame: any) {
      _this.stompClient.subscribe('/start/initial', function (hello: any) {
        _this.showMessage(JSON.parse(hello.body));
      });
    });
  }

  showMessage(message: any) {
    this.messages.push(message);
  }

  sendMessage() {
    this.stompClient.send(
      '/current/resume',
      {},
      JSON.stringify(this.newMessage)
    );
    this.newMessage = "";
  }
}
