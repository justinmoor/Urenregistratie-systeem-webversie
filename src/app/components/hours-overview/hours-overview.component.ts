import { Component, OnInit, ViewChild } from '@angular/core';
import { Hours } from '../../models/hours';
import { HoursService } from '../../services/hours.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-hours-overview',
  templateUrl: './hours-overview.component.html',
  styleUrls: ['./hours-overview.component.css']
})
export class HoursOverviewComponent implements OnInit {
  hours: Hours[];
  public searchStartDate: string;
  public searchEndDate: string;
  public searchCustomer: string;
  public searchProject: string;
  public searchSubject: string;

  constructor(private hoursService: HoursService) {
    this.hoursService.getAll().subscribe(hours => {
      this.hours = hours;
    });
    
  }

  ngOnInit(){

  }




}
