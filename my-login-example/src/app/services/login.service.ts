import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  URL: string = 'http://localhost:3000/users/';

  constructor() { }

  auth(user): Promise<any> {
    return axios.get(this.URL + user.id)
      .then(function(response) {
        console.log('--------1-------');
        console.log(response);
        return response.data;
      });
  }
}
