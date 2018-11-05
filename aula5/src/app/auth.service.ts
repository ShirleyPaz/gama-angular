import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  signUp(email: string, senha: string) {
    return this.http.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBN0U7i3YTYFjVs_vLxdSWtAmJkSL16gpc', {
      email: email,
      password: senha,
    });
  }

  logIn(email: string, senha: string) {
    return this.http.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBN0U7i3YTYFjVs_vLxdSWtAmJkSL16gpc', {
      email: email,
      password: senha,
    });
  }

  checkToken(idToken: string) {
    return this.http.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/getAccountInfo?key=AIzaSyBN0U7i3YTYFjVs_vLxdSWtAmJkSL16gpc', {
      idToken: idToken,
    });
  }

}
