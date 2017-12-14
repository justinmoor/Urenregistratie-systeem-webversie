import { Component, OnInit } from '@angular/core';
import { User } from '../user/user';
import { UserService } from '../user/user.service';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-account-aanmaken',
  templateUrl: './account-aanmaken.component.html',
  styleUrls: ['./account-aanmaken.component.css']
})
export class AccountAanmakenComponent implements OnInit {

  user: User = new User;

  constructor(private userService: UserService, private apiService: ApiService) {
    console.log('Dingen gebeurde');
  }

  ngOnInit() {
  }

  voegAccountToe() {
    this.user.setWerkzaam('1'); // 1 = werkzaam
    this.user.setWachtwoord('ipsen123');
    console.log(this.user);
    this.userService.voegAccountToe(this.user);
  }

}
