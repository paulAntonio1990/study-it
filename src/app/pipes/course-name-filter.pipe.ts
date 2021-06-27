import { Pipe, PipeTransform } from '@angular/core';
import {CourseDto} from "../domain/courseDto";

@Pipe({
  name: 'courseNameFilter'
})
export class CourseNameFilterPipe implements PipeTransform {

  transform(value: CourseDto[], input: string) {
    if (input) {
      input = input.toLowerCase();
      return value.filter((course: CourseDto) => course.name.toLowerCase().indexOf(input) > -1);
    }
    return value;
  }

}
