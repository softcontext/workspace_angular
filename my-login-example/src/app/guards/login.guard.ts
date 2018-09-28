import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    // localStorage: 브라우저가 제공하는 내장 저장소
    // 한번 저장하면 브라우저가 꺼져도 데이터가 유지됩니다.
    // 브라우저에 따라 2M~5M 정도 크기의 데이터를 저장할 수 있습니다.
    // 도메인에 따라 접근이 결정됩니다.
    // localStorage.removeItem('currentUser');

    // sessionStorage: 브라우저가 제공하는 내장 저장소
    // 브라우저가 종료되면 보관하던 데이터가 파괴됩니다.
    if (sessionStorage.getItem('currentUser')) {
      return true;
    }

    // URL을 개발자가 직접 코드적으로 변경합니다.

    // this.router.navigate(['login']) ==> http://localhost:4200/login
    // this.router.navigate(['login']);

    // http://localhost:4200/login?returnUrl=%2Fuser-only
    // %2F 는 치환문자로 '/' 기호를 의미한다.
    // 사용자가 접근하는 URL의 컴포넌트는 회원전용인데,
    // 로그인처리 기록이 없으므로 로그인 화면을 보여주면서
    // 사용자의 로그인 행동을 유도합니다.
    this.router.navigate(['login'], { queryParams: { returnUrl: state.url }});

    return false;
  }
}
