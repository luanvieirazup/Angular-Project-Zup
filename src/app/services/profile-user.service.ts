import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class ProfileUserService {

  private userProfile: User;

  constructor() { }

  setProfile(user: User) {
    this.userProfile = user;
  }

  getProfile() {
    return this.userProfile;
  }

}
