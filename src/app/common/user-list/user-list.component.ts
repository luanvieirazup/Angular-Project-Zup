import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { ProfileUserService } from 'src/app/services/profile-user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  @Input() receiveUsers: Array<any>;
  @Input() moveToTrash: boolean;
  @Input() moveToAll: boolean;
  @Input() moveToAttended: boolean;

  constructor(private profileUserService: ProfileUserService) { }

  ngOnInit() {
  }

  setProfile(user: User) {
    this.profileUserService.setProfile(user);
  }

}
