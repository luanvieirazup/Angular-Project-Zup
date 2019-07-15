import { Component, OnInit } from '@angular/core';
import { ProfileUserService } from 'src/app/services/profile-user.service';
import { User, Userinfo } from 'src/app/interfaces/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: User = this.profileUserService.getProfile();
  icon = 'user';
  userInfo: Userinfo[];

  constructor(private profileUserService: ProfileUserService, private router: Router) { }

  ngOnInit() {
    if (this.user === undefined) {
      this.router.navigate(['/everyone']);
    } else {
      this.setUserInfo();
    }

  }

  setIcon(event) {
    this.icon = event;
  }

  setUserInfo() {
    this.userInfo = [{
      title: 'Hi, My name is',
      subtitle: `${this.user.name.first} ${this.user.name.last}`,
      icon: 'person_outline',
      info: 'user'
    },
    {
      title: 'My email address is',
      subtitle: `${this.user.email}`,
      icon: 'mail_outline',
      info: 'mail'
    },
    {
      title: 'My age is',
      subtitle: `${this.user.dob.age}`,
      icon: 'calendar_today',
      info: 'calendar'
    },
    {
      title: 'My address is',
      subtitle: `${this.user.location.city} ${this.user.location.postcode}`,
      icon: 'map',
      info: 'map'
    },
    {
      title: 'My phone number is',
      subtitle: `${this.user.phone}`,
      icon: 'phone_iphone',
      info: 'phone'
    },
    {
      title: 'My password is',
      subtitle: `${this.user.login.password}`,
      icon: 'vpn_key',
      info: 'key'
    }];

  }
}
