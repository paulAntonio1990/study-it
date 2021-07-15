import {Component, Input, OnInit} from '@angular/core';
import {PostDto} from "../../../../../domain/postDto";

@Component({
  selector: 'post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {

  @Input() post!: PostDto;

  constructor() { }

  ngOnInit(): void {
  }

}
