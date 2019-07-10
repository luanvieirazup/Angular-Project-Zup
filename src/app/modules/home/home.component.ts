import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { RandomUserService } from 'src/app/services/random-user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users: User[];
  loading = true;

  constructor(private randomUserService: RandomUserService) { }

  getUser() {
    this.randomUserService.getMultipleUsers().subscribe(res => {
      this.users = res.results;
      this.loading = false;
    });
  }

  ngOnInit() {
    this.getUser();
  }

}
