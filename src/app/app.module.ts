import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ServicesComponent} from './components/services/services.component';
import { RegistratieComponent } from './components/registratie/registratie.component';
import { UserService } from './components/user/user.service';
import { ApiService } from './components/services/api.service';
import {HttpClientModule} from '@angular/common/http';
import { AuthorizationService } from './components/services/authorization.service';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AccountAanmakenComponent } from './components/account-aanmaken/account-aanmaken.component';
import { UsertableComponent } from './components/usertable/usertable.component';

//import { ApiService } from './services/api.service';
//import { AuthorizationService } from './services/authorization.service';

// Create ruotes
const appRoutes:Routes = [
  { path:'', component:LoginComponent },
  { path:'Registratie', component:RegistratieComponent},
  { path:'Account_maken', component:AccountAanmakenComponent}
  { path: 'gebruikers', component: UsertableComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ServicesComponent,
    RegistratieComponent,
    NavBarComponent,
    AccountAanmakenComponent
    UsertableComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService, ApiService, AuthorizationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
