import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OAuthModule } from 'angular-oauth2-oidc';
import {HttpModule} from '@angular/http';
import { HomeComponent } from './home/home.component';
import { PasswordFlowLoginComponent } from './password-flow-login/password-flow-login.component';
import {AppRouterModule} from './app.routes';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PasswordFlowLoginComponent
  ],
  imports: [
    BrowserModule
    , HttpModule
    , HttpClientModule
    , FormsModule
    , AppRouterModule
    , OAuthModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
