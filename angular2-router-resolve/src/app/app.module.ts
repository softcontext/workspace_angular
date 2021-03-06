import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { ContactDataComponent } from './contact-data/contact-data.component';

import { AppRoutes } from './app.routes';

import { ContactService } from './service/contact.service';
import { XxxService } from './service/xxx.service';
import { ContactResolveGuardService } from './guard/contact-resolve-guard.service';

export function infoServiceUseValue(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot){

  // return new ContactService().getContact(route.params['id']);
  return new XxxService().getContact(route.params['id']);
  // return {
  //   id: 1,
  //   name: 'Someone',
  //   phone: '00011112222',
  //   website: 'http://some.website.com'
  // };
}

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      ...AppRoutes
    ])
  ],
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactDetailComponent,
    ContactInfoComponent,
    ContactDataComponent
  ],
  providers: [
    ContactService, XxxService,
    // 서비스 클래스를 그냥 등록해도 되고,
    // {provide: '서비스제공이름', useValue: 함수명} 처럼 설정해서
    // infoService 이름으로 infoServiceUseValue 함수를 제공할 수 있다.
    {
      provide: 'infoService',
      useValue: infoServiceUseValue
    },
    ContactResolveGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
