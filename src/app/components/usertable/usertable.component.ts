import { Component, OnInit } from '@angular/core';
import {UserService } from '../user/user.service';
import { Observable } from 'rxjs/Observable';
import { User } from '../user/user';

@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements OnInit {

  users:User[];

  constructor(private userService:UserService) {
    this.userService.getAll().subscribe(users => {
      this.users = users;
    })
  }

  ngOnInit() {
  }

}
