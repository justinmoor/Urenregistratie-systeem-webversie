import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { post } from 'selenium-webdriver/http';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name:string;
  password:string;

  constructor(private dataService:DataService) {
      console.log("Constructor ran...")
   }

  ngOnInit() {
    console.log("ngOnInit ran..")

    

    this.dataService.getPosts().subscribe((post) => {
      console.log(post);
    });
  }

  onClick(){
    this.name="Nieuw naam"
  }
}
