import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent implements OnInit {
  passwordMeetsRequirements: boolean;
  passwordChanged: boolean;
  user:User;
  id:number;
  oldPassword:string;
  newPassword:string;
  repeatNewPassword:string;


  constructor(private userService:UserService) {
    this.user = JSON.parse(sessionStorage.getItem('activeUser'));
    this.id = this.user.personeelID;
  }

  ngOnInit() {
  }

  changePassword() {
    this.passwordMeetsRequirements = true;
    this.passwordChanged = false;
    if(this.userService.checkPasswordRequirements(this.newPassword, this.repeatNewPassword)) {

      this.userService.changePassword(this.id, this.newPassword, this.oldPassword)
      this.oldPassword = '';
      this.newPassword = '';
      this.repeatNewPassword = '';
      this.passwordChanged = true;
    } else {
      this.passwordMeetsRequirements = false;
    }
  }
}
