import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent implements OnInit {

  user:User;
  id:number;
  oldPassword:string;
  newPassword:string;
  repeatNewPassword:string;


  constructor(private userService:UserService) {
    this.user = JSON.parse(sessionStorage.getItem('activeUser'));
    this.id = this.user.personeelID;
    console.log(this.user);

  }

  ngOnInit() {
  }

  opslaanGegevens() {
    console.log(this.newPassword + " " + this.repeatNewPassword + " " + this.oldPassword + " " + this.user.password)
    if(this.newPassword == this.repeatNewPassword) {

      this.userService.changePassword(this.id, this.newPassword, this.oldPassword)
    }
  }
}
