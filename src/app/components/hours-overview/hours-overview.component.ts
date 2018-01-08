import { Component, OnInit, ViewChild } from '@angular/core';
import { Hours } from '../../models/hours';
import { HoursService } from '../../services/hours.service';
import { CsvService } from 'angular2-json2csv';

@Component({
  selector: 'app-hours-overview',
  templateUrl: './hours-overview.component.html',
  styleUrls: ['./hours-overview.component.css']
})
export class HoursOverviewComponent implements OnInit {
  hours: Hours[];
  filteredHours: Hours[];

  public searchStartDate: string;
  public searchEndDate: string;
  public searchCustomer: string;
  public searchProject: string;
  public searchSubject: string;

  constructor(private hoursService: HoursService, private csvService: CsvService) {
    this.hoursService.getAll().subscribe(hours => {
      this.hours = hours;
    });

  }

  createCsv(){
    this.csvService.download(this.hours, 'lol.csv');
  }

  ngOnInit(){

  }




}
