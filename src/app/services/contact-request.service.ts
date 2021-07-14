import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ContactRequestDto} from "../domain/contactRequestDto";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ContactRequestService {

  private readonly serverUrl = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  createContactRequest(contactRequestDto: ContactRequestDto): Observable<ContactRequestDto> {
    return this.httpClient.post<ContactRequestDto>(this.serverUrl + '/contact-request/create', contactRequestDto);
  }

  findAllContactRequests(): Observable<ContactRequestDto[]> {
    return this.httpClient.get<ContactRequestDto[]>(`${this.serverUrl}/contact-request/find-all`);
  }
}
