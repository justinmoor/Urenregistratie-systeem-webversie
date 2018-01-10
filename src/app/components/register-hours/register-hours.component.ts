import { Component, OnInit } from '@angular/core';
import { HourRegister } from '../../models/hour-register';
import { User } from '../../models/user';
import { HoursService } from '../../services/hours.service';

@Component({
  selector: 'app-register-hours',
  templateUrl: './register-hours.component.html',
  styleUrls: ['./register-hours.component.css']
})
export class RegisterHoursComponent implements OnInit {

  hour:HourRegister = new HourRegister;
  datum:Date = new Date();
  dag:string;
  maand:string;
  jaar:string;

  date:string;
  constructor(private hourservice:HoursService) { 
    this.dag = this.datum.getDate().toString();
    this.maand = (this.datum.getMonth() + 1).toString();
    this.jaar = this.datum.getFullYear().toString();

    this.date = this.jaar + "-" + this.maand + "-" + this.dag

    console.log(this.date)
  }

  ngOnInit() {
  }

  public saveHour(){
    console.log(this.hour);
    this.hourservice.setHour(this.hour);

  }

}
