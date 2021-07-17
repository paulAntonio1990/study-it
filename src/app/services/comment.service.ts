import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CommentDto} from "../domain/commentDto";

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private readonly serverUrl = 'http://localhost:8080';

  constructor(private readonly httpClient: HttpClient) { }

  createComment(postId: number, commentDto: CommentDto): Observable<CommentDto> {
    return this.httpClient.post<CommentDto>(`${this.serverUrl}/comments/${postId}/create`, commentDto);
  }

  deleteComment(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.serverUrl}/comments/${id}`);
  }
}
