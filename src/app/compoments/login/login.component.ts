import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { post } from 'selenium-webdriver/http';
@Component({
  selector: 'app-user',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  name:string = 'Stan';
  id:number = 91;
  userId:number = 10;
  password:string;

  constructor(private dataService:DataService) {
      console.log("Constructor ran...")
   }

  onClick() {
    console.log("onClick ran..")

    this.dataService.getPosts(this.id, this.userId).subscribe((posts) => {
      console.log(posts);
    });
  }

  //onClick(){
 //   this.name="Nieuw naam"
}
