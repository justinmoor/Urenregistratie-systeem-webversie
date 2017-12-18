import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent implements OnInit {

  user: User;

  constructor(private userService: UserService) {
    this.user = JSON.parse(sessionStorage.getItem('activeUser'));
    console.log(this.user);

  }

  ngOnInit() {
  }
}
