import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-account-aanmaken',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
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
    this.user.setWachtwoord('Welkom123');
    console.log(this.user);
    this.userService.voegAccountToe(this.user);
  }

}
