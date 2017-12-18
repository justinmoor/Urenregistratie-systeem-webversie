import { Component, OnInit } from '@angular/core';
import { Hours } from '../../models/hours';
import { HoursService } from '../../services/hours.service';
import { Observable } from 'rxjs/Observable';
import { HoursOverviewFilterComponent} from '../hours-overview-filter/hours-overview-filter.component';

@Component({
  selector: 'app-hours-overview',
  templateUrl: './hours-overview.component.html',
  styleUrls: ['./hours-overview.component.css']
})
export class HoursOverviewComponent implements OnInit {
  hours: Hours[];

  constructor(private hoursService: HoursService) {
    this.hoursService.getAll().subscribe(hours => {
      this.hours = hours;
    });
  }

  ngOnInit() {
  }

}
