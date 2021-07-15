import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CourseDto} from "../../../../../domain/courseDto";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FieldValidationServiceService} from "../../../../../services/field-validation-service.service";
import {UserDto} from "../../../../../domain/userDto";
import {TokenHandlingService} from "../../../../../services/token-handling.service";
import {PostDto} from "../../../../../domain/postDto";
import {PostService} from "../../../../../services/post.service";

@Component({
  selector: 'app-add-post-dialog',
  templateUrl: './add-post-dialog.component.html',
  styleUrls: ['./add-post-dialog.component.scss']
})
export class AddPostDialogComponent implements OnInit {

  addPostFormGroup! : FormGroup;
  isFormSubmitted = false;
  course!: CourseDto;

  constructor(public dialogRef: MatDialogRef<AddPostDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private formBuilder: FormBuilder,
              private fieldValidationService: FieldValidationServiceService,
              private tokenHandlingService: TokenHandlingService,
              private postService: PostService) {
    this.initForm();
    if (this.data?.course) {
      this.course = this.data.course;
    }
  }

  ngOnInit(): void {
  }

  onClose() {
    this.dialogRef.close();
  }

  isControlValid(name: string): boolean {
    return this.fieldValidationService.isValid(name, this.addPostFormGroup);
  }

  onCreate() {
    this.isFormSubmitted = true;
    if (this.addPostFormGroup.valid) {
      let postDto = this.createDtoFromForm();

      this.postService.createPost(this.course.id, postDto)
        .subscribe(createdPost => {
          if (createdPost) {
            this.dialogRef.close(createdPost);
          }
        });
    } else {
      this.fieldValidationService.validateControls(this.addPostFormGroup);
    }
  }

  private initForm() {
    this.addPostFormGroup = this.formBuilder.group({
      postHeadingControl: ['', Validators.required],
      postBodyControl: ['', Validators.required]
    })
  }

  private createDtoFromForm() {
    const postDto = {} as PostDto;
    postDto.heading = this.addPostFormGroup.get('postHeadingControl')?.value;
    postDto.body = this.addPostFormGroup.get('postBodyControl')?.value;

    const userFromSession = this.tokenHandlingService.getUser();
    const user = {
      id: userFromSession.id,
      userName: userFromSession.userName
    } as UserDto;
    postDto.creator = user;

    return postDto;
  }
}
