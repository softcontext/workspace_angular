import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    id:'user',
    pw:'111'
  };
  errorMessage = '';
  returnUrl: string;

  constructor(
    private loginService: LoginService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.errorMessage = '';
    alert(JSON.stringify(this.user));
    this.loginService.auth(this.user)
      .then(data => {
        console.log('--------2-------');
        console.log(this.returnUrl);
        console.log(this.router);
        localStorage.setItem('currentUser', JSON.stringify(this.user));
        this.router.navigate([this.returnUrl]);
      })
      .catch(error => {
        // this.alertService.error(error);
        console.log('--------3-------');
        this.errorMessage = 'id 또는 pw 가 일치하지 않습니다.';
      });
  }
}
