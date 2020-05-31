import { Component, OnInit } from '@angular/core';
import {User} from "../model/user";
import {UserService} from "../service/user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService) { }

  //Fetches all the entities in the DB and stores in users field
  ngOnInit(): void {
    this.userService.findAll().subscribe(data => {
      this.users = data;
    })
  }

}
