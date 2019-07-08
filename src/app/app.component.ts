import { RandomUserService } from './services/random-user.service';
import { Component, OnInit } from '@angular/core';
import { User } from './interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  users: User[];

  constructor(private randomUserService: RandomUserService) { }

  ngOnInit() {
    this.randomUserService.getMultipleUsers().subscribe(dados => this.users = dados.results);
    console.log(this.users);
  }
}
