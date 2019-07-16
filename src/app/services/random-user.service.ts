import { ResultUsers } from './../interfaces/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomUserService {

  private readonly APIMultipleUsers = 'https://randomuser.me/api/?results=8&noinfo';

  constructor(private http: HttpClient) { }

  getMultipleUsers(): Observable<ResultUsers> {
    return this.http.get<ResultUsers>(this.APIMultipleUsers);
  }
}