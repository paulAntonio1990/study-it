import {TutoringSessionDto} from "./tutoringSessionDto";
import {UserDto} from "./userDto";
import {ContentDto} from "./contentDto";
import {PostDto} from "./postDto";

export interface CourseDto {
  id: number;
  name: string;
  domain: string;
  studyProgram: string;
  year: number;
  tutoringSessionDtos: TutoringSessionDto[];
  creator: UserDto;
  content: ContentDto;
  postDtos: PostDto[];
}
