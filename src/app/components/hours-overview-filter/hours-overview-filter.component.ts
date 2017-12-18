import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hours-overview-filter',
  templateUrl: './hours-overview-filter.component.html',
  styleUrls: ['./hours-overview-filter.component.css']
})
export class HoursOverviewFilterComponent implements OnInit {
  public searchStartDate: string;
  public searchEndDate;
  public searchCustomer;
  public searchProject;
  public searchSubject;
  constructor() {
  }

  ngOnInit() {
  }

}
