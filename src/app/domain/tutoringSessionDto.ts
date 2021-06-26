import {CourseDto} from "./courseDto";

export interface TutoringSessionDto {
  id: number,
  name: string;
  course: CourseDto
}
