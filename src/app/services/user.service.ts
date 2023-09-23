import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserReq, UserTableDto } from '../types';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  emitEmail: Subject<string> = new Subject<string>();

  constructor(
    private http: HttpClient
  ) { }

  getAllUsersById(email: string) {
    let params = new HttpParams().set('email', email);
    return this.http.get<Array<UserTableDto>>(`${environment.securedBaseUrl}/Login/findUserReportingMe`, {params});
  }

  getUserByMobile(contactNum: string) {
    let params = new HttpParams().set('contactNum', contactNum);
    return this.http.get(`${environment.securedBaseUrl}/Login/findUserByMobile`, {params});
  }

  getUserByEmail(email: string) {
    let params = new HttpParams().set('email', email);
    return this.http.get<UserReq>(`${environment.securedBaseUrl}/Login/findByEmail`, {params});
  }

  updateUser(userDetails: UserReq) {
    return this.http.patch(`${environment.securedBaseUrl}/Login/UpdateUserData`, userDetails);
  }
}
