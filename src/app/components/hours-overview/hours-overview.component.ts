import { Component, OnInit, ViewChild } from '@angular/core';
import { Hours } from '../../models/hours';
import { HoursService } from '../../services/hours.service';
import { CsvService } from 'angular2-json2csv';
import { FilterPipe } from '../../pipes/filter-pipe.pipe';
import {AuthorizationService} from '../../services/authorization.service';
import { Router } from '@angular/router/src/router';

@Component({
  selector: 'app-hours-overview',
  templateUrl: './hours-overview.component.html',
  styleUrls: ['./hours-overview.component.css']
})
export class HoursOverviewComponent implements OnInit {
  hours: Hours[];
  filteredHours: Hours[];
  router: Router

  public searchStartDate: string;
  public searchEndDate: string;
  public searchCustomer: string;
  public searchProject: string;
  public searchSubject: string;

  fout : boolean = false;
  
  constructor(private csvService: CsvService, private hoursService: HoursService, private filterPipe: FilterPipe, private auth: AuthorizationService) {
    this.hoursService.getAll().subscribe(hours => {
      this.hours = hours;
    },
    error => {
      this.fout = true;
    });

  }

  setDate(){
    console.log(this.hours[0].startingDate)
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
