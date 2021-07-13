import { Injectable } from '@angular/core';
import {DatePipe} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor(private datePipe: DatePipe) { }

  getTodayAsString() {
    return this.datePipe.transform(new Date(), 'yyyyMMdd');
  }
}
