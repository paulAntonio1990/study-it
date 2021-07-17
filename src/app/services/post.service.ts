import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PostDto} from "../domain/postDto";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private readonly serverUrl = 'http://localhost:8080';

  constructor(private readonly httpClient: HttpClient) { }

  createPost(courseId: number, postDto: PostDto): Observable<PostDto> {
    return this.httpClient.post<PostDto>(`${this.serverUrl}/posts/${courseId}/create`, postDto);
  }

  deletePost(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.serverUrl}/posts/${id}`);
  }
}
