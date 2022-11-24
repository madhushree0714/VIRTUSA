import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.component.html',
  styleUrls: ['./date-time.component.css']
})
export class DateTimeComponent implements OnInit {     

  private days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Fantastic Friday','Saturday'];
  private date = new Date();

  public hour: any;
  public minute!: string;
  public second!: string;
  public ampm!: string;
  public day!: string;

  Date1 : Date = new Date();
  constructor() { }

  ngOnInit() {
    setInterval(() => {
      const date = new Date();
      this.updateDate(date  );
    }, 1000);

    this.day = this.days[this.date.getDay()];
 

  }

  private updateDate(date : Date) {
    const hour = date.getHours();

    this.ampm = hour >= 12 ? 'PM' : 'AM';

    this.hour = hour % 12;
    this.hour = this.hour ? this.hour : 12;

    this.hour = this.hour < 10 ? '0' + this.hour : this.hour;

    const minute = date.getMinutes();
    this.minute = minute < 10 ? '0' + minute : minute.toString();

    const second = date.getSeconds();
    this.second = second < 10 ? '0' + second : second.toString();
    
  }
}  