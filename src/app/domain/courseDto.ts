import {TutoringSessionDto} from "./tutoringSessionDto";

export interface CourseDto {
  id: number;
  name: string;
  domain: string;
  studyProgram: string;
  year: number;
  tutoringSessionDtos: TutoringSessionDto[];
}
