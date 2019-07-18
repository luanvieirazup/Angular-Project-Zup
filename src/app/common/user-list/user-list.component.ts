import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { ProfileUserService } from 'src/app/services/profile-user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  @Input() recebeUsers: Array<any>;

  constructor(private profileUserService: ProfileUserService) { }

  ngOnInit() {
  }

  setProfile(user: User) {
    this.profileUserService.setProfile(user);
  }

}