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
  rechten : string;
  gelukt : boolean = false;

  constructor(private userService: UserService) {
    console.log('Dingen gebeurde');
  }

  ngOnInit() {
  }

  addAccount() {
    this.user.setWerkzaam('1'); // 1 = werkzaam
    this.user.setWachtwoord('Welkom123');
    this.user.setRechten((this.rechten == "Administratie" ? "1" : "0"))
    console.log(this.user.rechten);
    this.userService.voegAccountToe(this.user);
    this.user.voornaam = ""
    this.user.achternaam = ""
    this.user.tussenvoegsel = ""
    this.user.email = ""
    this.gelukt = true;
  }
}
