import { Component, OnInit } from '@angular/core';
import {User} from "../model/user";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../service/user.service";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
//Component that allows us to persist a new User object in the DB
export class UserFormComponent implements OnInit {

  user: User;

  constructor(
    private route: ActivatedRoute,
     private router: Router,
      private userService: UserService){
    this.user = new User();
  }

  onSubmit() {
    this.userService.save(this.user).subscribe(result => this.gotoUserList());
  }

  //Redisplay the list of entities once we have persisted a new one
  gotoUserList() {
    this.router.navigate(['/users']);
  }

  ngOnInit(): void {
  }
}
