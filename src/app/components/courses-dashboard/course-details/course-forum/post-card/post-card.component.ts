import {Component, Input, OnInit} from '@angular/core';
import {PostDto} from "../../../../../domain/postDto";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {AddCommentDialogComponent} from "../add-comment-dialog/add-comment-dialog.component";

@Component({
  selector: 'post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {

  @Input() post!: PostDto;


  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  addComment() {
    let matDialogRef = this.dialog.open(AddCommentDialogComponent,{
      width: '600px',
      height: '400px',
      data: {
        post: this.post
      }
    });

    matDialogRef.afterClosed().subscribe(createdPost => {
      if (createdPost) {
        window.location.reload();
      }
    })
  }
}
