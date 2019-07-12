import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class ProfileUserService {

  userProfile: User;

  constructor() { }

  setProfile(user) {
    this.userProfile = user;
  }

  getProfile() {
    return this.userProfile;
  }

}