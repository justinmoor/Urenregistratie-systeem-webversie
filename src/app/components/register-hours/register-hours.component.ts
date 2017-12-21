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

  constructor(private hourservice:HoursService) { 
  }

  ngOnInit() {
  }

  public saveHour(){
    console.log(this.hour);
  

    this.hourservice.setHour(this.hour);

  }

}
