import { Component } from '@angular/core';
import { ngxCsv } from "ngx-csv/ngx-csv";
import { BasicWatchScheduleModel } from './basic-watch-schedule.model';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-basic-watch-schedule',
  templateUrl: './basic-watch-schedule.component.html',
  styleUrls: ['./basic-watch-schedule.component.css']
})
export class BasicWatchScheduleComponent {
  shifts: any = BasicWatchScheduleModel.shifts;
  hours: any;
  date: string = '2022-01-01';
  isDaily: boolean = true;
  constructor() { }

  ngOnInit() {
    this.resetAll();
    this.hours = BasicWatchScheduleModel.hours;
  }

  drop(event: CdkDragDrop<string[]>){
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  dateChanged(event: any) {
    this.date = event.target.value;
  }

  resetAll() {
    this.shifts = [
      ['BM', 'ZT'],
      ['Si', 'ZY'],
      ['OA', 'MG', 'TV', 'RM'],
      ['RG', 'ZO', 'HY', 'XT', 'YP', 'TY', 'ZC'],
      ['JE'],
      ['AB', 'WA', 'BO'],
      [],
      ['JL', 'FK', 'KM', 'TX', 'GJ'],
      ['OR']
    ]
  }

  getDateInSpecificFormat() {
    let date = this.date.slice(8);
    let month = Number(this.date.slice(5,7));
    let monthName;
    monthName = new Date;
    monthName.setMonth(month - 1);
    monthName = monthName.toLocaleString('en-US', {
      month: 'long',
    });
    let year = this.date.slice(0,4);

    return `${monthName} ${date} ,${year}`;
  }

  getWeekDayWithName() {
    let dayFullName = new Date();
    dayFullName.setDate(Number(this.date.slice(8)));
    dayFullName.setMonth(Number(this.date.slice(5,7)) - 1);
    dayFullName.setFullYear(Number(this.date.slice(0,4)));
    return dayFullName.toLocaleDateString('en-US', {weekday: 'long'});
  }

  getRequestOverAvailable() {
    let count = this.shifts.reduce((currentCount: any, row: string | any[]) => currentCount + row.length, 0);
    return `${count}/${count}`;
  }

  createCSV(){
    let csvData: string[][] = []
    let maxR: number = Math.max.apply(Math, this.shifts.map((row: any) => ( row.length ) ));
    Array(maxR).fill(0).map(() => csvData.push(new Array(9).fill('')))
    this.shifts.forEach((row: any, i: any) => {
      row.forEach((_: any, j: any) => {
        csvData[j][i] = this.shifts[i][j];
      })
    });
    new ngxCsv(csvData, `Schedule-${this.date}`, {
      headers: this.hours,
    });
  }
}
