import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/ViewModel/user';
import { Router } from '@angular/router';
import { InsertUserService } from 'src/app/services/insert-user.service';
import { FormControl } from '@angular/forms';
// import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // name = new FormControl('');
  newUser: User;
  constructor(private userFromAPIService: InsertUserService
    ,         private router: Router) {
    this.newUser = new User(89547, 'userFromAngular', 1000, 10);
   }
    // saveUser(ev) {

    //   ev.preventDefault();
    saveUser() {
      console.log(JSON.stringify(this.newUser));

      this.userFromAPIService.insertUser(this.newUser)
      .subscribe(
        (data) => {console.log (JSON.stringify(data)); },
        (err) => {console.log(err);
        });
      this.router.navigate(['/empolyee']);
    }
    ngOnInit() {
      //  this.saveUser();
    }
}
