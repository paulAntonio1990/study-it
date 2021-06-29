import {TutoringSessionDto} from "./tutoringSessionDto";
import {UserDto} from "./userDto";
import {ContentDto} from "./contentDto";

export interface CourseDto {
  id: number;
  name: string;
  domain: string;
  studyProgram: string;
  year: number;
  tutoringSessionDtos: TutoringSessionDto[];
  creator: UserDto;
  content: ContentDto;
}
