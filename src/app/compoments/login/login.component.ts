import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { post } from 'selenium-webdriver/http';
@Component({
  selector: 'app-user',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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
