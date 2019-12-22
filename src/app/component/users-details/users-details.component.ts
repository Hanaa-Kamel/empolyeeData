import { Component, OnInit } from '@angular/core';

import { InsertUserService } from 'src/app/services/insert-user.service';
import { User } from 'src/app/ViewModel/user';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})
export class UsersDetailsComponent implements OnInit {
  UsersList: User[] = [];
  constructor(private userFromAPIService: InsertUserService) {

  }

  ngOnInit() {
    this.userFromAPIService.getAllUser()
      .subscribe((res) => {
        this.UsersList = res;
      },
      (err) => {
        console.log(err);
      });
  }

}
