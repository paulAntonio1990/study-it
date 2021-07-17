import {Component, Input, OnInit} from '@angular/core';
import {PostDto} from "../../../../../domain/postDto";
import {MatDialog} from "@angular/material/dialog";
import {AddCommentDialogComponent} from "../add-comment-dialog/add-comment-dialog.component";
import {UserDto} from "../../../../../domain/userDto";
import {ConfirmationDialogComponent} from "../../../../confirmation-dialog/confirmation-dialog.component";
import {PostService} from "../../../../../services/post.service";
import {CommentDto} from "../../../../../domain/commentDto";
import {CommentService} from "../../../../../services/comment.service";

@Component({
  selector: 'post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {

  @Input() post!: PostDto;
  @Input() isLoggedIn!: boolean;
  @Input() isAdmin!: boolean;
  @Input() isProfesor!: boolean;
  @Input() user!: UserDto;

  constructor(public dialog: MatDialog,
              private postService: PostService,
              private commentService: CommentService) { }

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
       this.reloadPage();
      }
    })
  }

  onDelete(post: PostDto) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      maxWidth: "400px",
      data: {
        message: 'Sunteți sigur de ștergerea postării?'
      }
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        this.postService.deletePost(post.id).subscribe(data => {
          this.reloadPage();
        })
      }
    });
  }

  userIsSameAsCreatorOnPost() {
    return this.post.creator.id == this.user.id;
  }

  userIsSameAsCreatorOnComment(comment: CommentDto) {
    return comment.creator.id == this.user.id;
  }

  private reloadPage() {
    window.location.reload();
  }

  onDeleteComment(comment: CommentDto) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      maxWidth: "400px",
      data: {
        message: 'Sunteți sigur de ștergerea comentariului?'
      }
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        this.commentService.deleteComment(comment.id).subscribe(data => {
          this.reloadPage();
        })
      }
    });
  }
}
