import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData = { email:'', password:'' };
  // loginData: any = {};
  message = '';
  data: any;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  login() {
    console.log('Email : '+this.loginData.email);
    console.log('Password : '+this.loginData.password);


    this.http.post('/api/signin',this.loginData).subscribe(resp => {
      this.data = resp;
      localStorage.setItem('jwtToken', this.data.token);
      if(this.loginData.email === "admin@tripwithus.com" && this.loginData.password === "admin"){
         this.router.navigate(['event-admin'])
      }else{
        this.router.navigate(['event2']);
      // this.router.navigate(['navbar']);
      }

    }, err => {
      this.message = err.error.msg;
      this.data = "Sorry, you have entered invalid credentials";
    });
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  logout() {
    this.router.navigate(['']);
  }

}
