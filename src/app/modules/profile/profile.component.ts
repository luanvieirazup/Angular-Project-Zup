import { Component, OnInit } from '@angular/core';
import { ProfileUserService } from 'src/app/services/profile-user.service';
import { User } from 'src/app/interfaces/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: User = this.profileUserService.getProfile();

  constructor(private profileUserService: ProfileUserService, private router: Router) { }

  ngOnInit() {
    if (this.user === undefined) {
      this.router.navigate(['/everyone']);
    }
  }
}
