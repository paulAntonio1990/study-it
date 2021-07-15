import {CourseDto} from "./courseDto";
import {UserDto} from "./userDto";
import {CommentDto} from "./commentDto";

export interface PostDto {
  id: number;
  heading: string;
  body: string;
  course: CourseDto;
  creator: UserDto;
  date: Date;
  commentDtos: CommentDto[];
}
