import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-account-aanmaken',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  accountCreated: boolean;
  user: User = new User;

  constructor(private userService: UserService, private apiService: ApiService) {

  }

  ngOnInit() {
  }

  addAccount() {
    if(this.userService.hasCorrectProperties(this.user)) {


      this.user.setWerkzaam('1'); // 1 = werkzaam
      this.user.setWachtwoord('Welkom123');
      this.userService.voegAccountToe(this.user);
      this.accountCreated = true;
    }
    else{
      this.accountCreated = false;
    }
  }

}
