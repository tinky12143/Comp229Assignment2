import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  private login = false;
  private checkLogin = new Subject<boolean>();

  constructor(private httpClient: HttpClient, private router: Router) {}

  getCheckLogin() {
    return this.login;
  }

  loginAccount(name: string, password: string) {
    this.httpClient
      .post<{ message: string }>('/credential', {
        name: name,
        password: password,
      })
      .subscribe((res) => {
        const message = res.message;
        console.log(message);
        if (message) {
          this.login = true;
          this.checkLogin.next(true);
          this.router.navigate(['/business-page']);
        } else {
          this.router.navigate(['/credential']);
        }
      });
  }

  updateBusiness(id: string, name: string, number: number, email: string) {
    const business: any = {
      _id: id,
      email: email,
      number: number,
      name: name,
    };
    this.httpClient
      .put('/business/contact/' + id, business)
      .subscribe((res) => {
        this.router.navigate(['/business-page']);
      });
  }

  getBusiness(): Observable<{
    businessContact: any[];
  }> {
    return this.httpClient.get<{
      businessContact: any[];
    }>('/business/contact/');
  }
}
