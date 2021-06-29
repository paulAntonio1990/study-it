import {Component, OnInit} from '@angular/core';
import {Stomp} from "@stomp/stompjs";
import * as SockJS from "sockjs-client";
import {SessionMessageDto} from "../../../../../domain/sessionMessageDto";
import {Router} from "@angular/router";
import {TokenHandlingService} from "../../../../../services/token-handling.service";
import {UserDto} from "../../../../../domain/userDto";
import {SessionMessagesService} from "../../../../../services/session-messages.service";
import {TutoringSessionDto} from "../../../../../domain/tutoringSessionDto";

@Component({
  selector: 'app-tutoring-session',
  templateUrl: './tutoring-session.component.html',
  styleUrls: ['./tutoring-session.component.scss']
})
export class TutoringSessionComponent implements OnInit {
  sessionMessages: SessionMessageDto[] = [];
  newMessage: any;
  disabled = true;
  tutoringSession!: TutoringSessionDto;

  private stompClient: any;

  constructor(private router: Router,
              private tokenHandlingService: TokenHandlingService,
              private sessionMessageService: SessionMessagesService) {
  }

  ngOnInit(): void {
    this.connect();
    this.sessionMessageService.findAllBySessionId(this.getSessionIdFromUrl())
      .subscribe( messages => this.sessionMessages = messages);
  }

  connect() {
    const socket = new SockJS('http://localhost:8080/tutoring-session');
    this.stompClient = Stomp.over(socket);
    const _this = this;
    this.stompClient.connect({},  (frame: any) => {
      _this.stompClient.subscribe('/start/initial', (request: any) => {
        _this.showMessage(JSON.parse(request.body));
      });
    });
  }

  showMessage(message: any) {
    this.sessionMessages.push(message);
  }

  sendMessage() {
    const sessionMessage = {} as SessionMessageDto;
    sessionMessage.message = this.newMessage;
    sessionMessage.sessionId = this.getSessionIdFromUrl();

    const userFromSession = this.tokenHandlingService.getUser();
    const user = {
      id: userFromSession.id,
      userName: userFromSession.userName
    } as UserDto;

    sessionMessage.user = user;

    this.stompClient.send(
      '/current/resume',
      {},
      JSON.stringify(sessionMessage)
    );
    this.newMessage = "";
  }

  private getSessionIdFromUrl() {
    const urlParts = this.router.url.split("/");
    return +urlParts[urlParts.length - 1];
  }
}
