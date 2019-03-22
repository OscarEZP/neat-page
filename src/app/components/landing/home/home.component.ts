import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  email: string;
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  userSubscription() {
    this.userService.userSubscription(this.email)
      .subscribe((response) => {
        console.log(response, 'respuesta');
      }, error => {
        console.log(error, 'error');
      });
  }

}
