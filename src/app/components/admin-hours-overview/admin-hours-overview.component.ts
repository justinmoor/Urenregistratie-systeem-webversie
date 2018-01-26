import { Component, OnInit } from '@angular/core';
import {FilterPipe} from '../../pipes/filter-pipe.pipe';
import {CsvService} from 'angular2-json2csv/index';
import {HoursService} from '../../services/hours.service';
import {Hours} from '../../models/hours';
import {AuthorizationService} from '../../services/authorization.service';

@Component({
  selector: 'app-admin-hours-overview',
  templateUrl: './admin-hours-overview.component.html',
  styleUrls: ['../hours-overview/hours-overview.component.css']
})
export class AdminHoursOverviewComponent implements OnInit {
  hours: Hours[];
  filteredHours: Hours[];

  public searchStartDate: string;
  public searchEndDate: string;
  public searchCustomer: string;
  public searchProject: string;
  public searchSubject: string;
  public searchName : string;

  fout : boolean = false;
  constructor(private hoursService: HoursService, private filterPipe: FilterPipe, private auth: AuthorizationService, private csvService : CsvService) {
    this.hoursService.getAllFromAll().subscribe(hours => {
        this.hours = hours;
      },
      error => {
        this.fout = true;
      });
  }

  createCsv(){
    this.filteredHours = this.filterPipe.transform(this.hours, 'customerName', this.searchCustomer);
    this.filteredHours = this.filterPipe.transform(this.filteredHours, 'projectName', this.searchProject);
    this.filteredHours = this.filterPipe.transform(this.filteredHours, 'subjectName', this.searchSubject);
    this.csvService.download(this.filteredHours, 'Gewerkte Uren '+new Date().toDateString());
  }

  ngOnInit(){

  }
  setConfirmed(uur){
    this.hoursService.setConfirmed(uur);
  }

  public sendHour(hour) {
    sessionStorage.setItem("hourToChange", JSON.stringify(hour));
  }
}
