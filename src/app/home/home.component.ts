import { Component, OnInit } from '@angular/core';
import {OAuthService} from 'angular-oauth2-oidc';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {jsonpCallbackContext} from '@angular/common/http/src/module';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  response: any;
  constructor(private oauthService: OAuthService, private http: HttpClient) {
  }

  public login() {
    this.oauthService.initImplicitFlow();
  }

  public logoff() {
    this.oauthService.logOut();
  }


  getConference(): Observable<any> {
      const token = this.oauthService.getAccessToken();
      const headers = new HttpHeaders({
        'Authorization': 'Bearer ' + token
      });
      return   this.http.get('http://localhost:54438/Conference/GetAll', {'headers': headers, 'responseType': 'json'})
                    .map((res: Response) => res.json());
  }
  public get name() {
    // const claims = this.oauthService.getIdentityClaims();
    // if (!claims) { return null; }
    // return claims['name'];
    // .given_name;
    this.getConference().subscribe( res => this.response = res);
    return this.response;

  }
}
