import { Pipe, PipeTransform } from '@angular/core';
import {CourseDto} from "../domain/courseDto";

@Pipe({
  name: 'courseNameFilter'
})
export class CourseNameFilterPipe implements PipeTransform {

  transform(value: CourseDto[], input: string, allCourses: CourseDto[], pageSize: number) {
    if (input) {
      input = input.toLowerCase();
      return allCourses.filter((course: CourseDto) => course.name.toLowerCase().indexOf(input) > -1).slice(0, pageSize);
    }
    return value;
  }

}
