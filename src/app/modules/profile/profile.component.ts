import { Component, OnInit } from '@angular/core';
import { ProfileUserService } from 'src/app/services/profile-user.service';
import { User, Userinfo } from 'src/app/interfaces/user';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

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
      title: 'USER_INFO.NAME',
      subtitle: `${this.user.name.first} ${this.user.name.last}`,
      icon: 'person_outline',
      info: 'user'
    },
    {
      title: 'USER_INFO.EMAIL',
      subtitle: `${this.user.email}`,
      icon: 'mail_outline',
      info: 'mail'
    },
    {
      title: 'USER_INFO.AGE',
      subtitle: `${this.user.dob.age}`,
      icon: 'calendar_today',
      info: 'calendar'
    },
    {
      title: 'USER_INFO.ADDRESS',
      subtitle: `${this.user.location.city} ${this.user.location.postcode}`,
      icon: 'map',
      info: 'map'
    },
    {
      title: 'USER_INFO.PHONE',
      subtitle: `${this.user.phone}`,
      icon: 'phone_iphone',
      info: 'phone'
    },
    {
      title: 'USER_INFO.PASSWORD',
      subtitle: `${this.user.login.password}`,
      icon: 'vpn_key',
      info: 'key'
    }];

  }
}
