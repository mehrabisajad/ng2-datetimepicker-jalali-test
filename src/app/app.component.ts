import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dateTime = new Date();

  dateTimeLtr;
  dateTimeRtl;
  strDateTimeLtr = '<ng2-datetimepicker [(ngModel)]="dateTimeLtr" dir="ltr"></ng2-datetimepicker>';
  strDateTimeRtl = '<ng2-datetimepicker [(ngModel)]="dateTimeRtl" dir="rtl"></ng2-datetimepicker>';


  dateLtr;
  dateRtl;
  strDateLtr = '<ng2-datetimepicker [disableTime]="true" [(ngModel)]="dateLtr" dir="ltr"></ng2-datetimepicker>';
  strDateRtl = '<ng2-datetimepicker [disableTime]="true" [(ngModel)]="dateRtl" dir="rtl"></ng2-datetimepicker>';


  strDateDisabledLtr = '<ng2-datetimepicker [disabled]="true" [disableTime]="true" [(ngModel)]="dateTimeLtr" dir="ltr"></ng2-datetimepicker>';
  strDateDisabledRtl = '<ng2-datetimepicker [disabled]="true" [disableTime]="true" [(ngModel)]="dateTimeRtl" dir="rtl"></ng2-datetimepicker>';

}
