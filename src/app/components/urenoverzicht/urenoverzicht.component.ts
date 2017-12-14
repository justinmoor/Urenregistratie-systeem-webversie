import { Component, OnInit } from '@angular/core';
import { Uren } from "../../models/uren"
import { UrenService } from '../../services/uren.service'
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-urenoverzicht',
  templateUrl: './urenoverzicht.component.html',
  styleUrls: ['./urenoverzicht.component.css']
})
export class UrenoverzichtComponent implements OnInit {
  uren:Uren;

  constructor(private urenService:UrenService) {
    this.urenService.getAll().subscribe(uren =>{
      this.uren = uren;
    })
   }

  ngOnInit() {
  }

}