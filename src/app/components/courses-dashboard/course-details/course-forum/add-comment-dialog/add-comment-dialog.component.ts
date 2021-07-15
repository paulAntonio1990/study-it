import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FieldValidationServiceService} from "../../../../../services/field-validation-service.service";
import {PostDto} from "../../../../../domain/postDto";
import {UserDto} from "../../../../../domain/userDto";
import {CommentDto} from "../../../../../domain/commentDto";
import {TokenHandlingService} from "../../../../../services/token-handling.service";
import {CommentService} from "../../../../../services/comment.service";

@Component({
  selector: 'app-add-comment-dialog',
  templateUrl: './add-comment-dialog.component.html',
  styleUrls: ['./add-comment-dialog.component.scss']
})
export class AddCommentDialogComponent implements OnInit {

  isFormSubmitted = false;
  addCommentFormGroup!: FormGroup;
  post!: PostDto;

  constructor(public dialogRef: MatDialogRef<AddCommentDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private formBuilder: FormBuilder,
              private fieldValidationService: FieldValidationServiceService,
              private tokenHandlingService: TokenHandlingService,
              private commentService: CommentService) {
    this.initForm();
    if (this.data?.post) {
      this.post = this.data.post;
    }
  }

  ngOnInit(): void {
  }

  isControlValid(name: string): boolean {
    return this.fieldValidationService.isValid(name, this.addCommentFormGroup);
  }

  private initForm() {
    this.addCommentFormGroup = this.formBuilder.group({
      commentControl: ['', Validators.required]
    })
  }

  onClose() {
    this.dialogRef.close();
  }

  onCreate() {
    this.isFormSubmitted = true;
    if (this.addCommentFormGroup.valid) {
      let commentDto = this.createDtoFromForm();
      this.commentService.createComment(this.post.id, commentDto)
        .subscribe(createdComment => {
          if (createdComment) {
            this.dialogRef.close(createdComment);
          }
        });
    } else {
      this.fieldValidationService.validateControls(this.addCommentFormGroup);
    }
  }

  private createDtoFromForm() {
    const commentDto = {} as CommentDto;
    commentDto.body = this.addCommentFormGroup.get('commentControl')?.value;

    const userFromSession = this.tokenHandlingService.getUser();
    const user = {
      id: userFromSession.id,
      userName: userFromSession.userName
    } as UserDto;
    commentDto.creator = user

    return commentDto;
  }
}
