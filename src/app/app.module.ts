import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistratieComponent } from './components/registration/registration.component';
import { UserService } from './services/user.service';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthorizationService } from './services/authorization.service';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AccountAanmakenComponent } from './components/create-account/create-account.component';
import { UsertableComponent } from './components/user-overview/user-overview.component';
import { UrenoverzichtComponent } from './components/hours-overview/hours-overview.component';
import { UrenService } from './services/uren.service';
import { AccountInfoComponent } from './components/account-info/account-info.component';
import { UrenoverzichtFilterComponent } from './components/hours-overview-filter/hours-overview-filter.component';

// import { ApiService } from './services/api.service';
// import { AuthorizationService } from './services/authorization.service';

// Create ruotes
const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'registratie', component: RegistratieComponent},
  { path: 'account_maken', component: AccountAanmakenComponent},
  { path: 'gebruikers', component: UsertableComponent},
  { path: 'urenoverzicht', component: UrenoverzichtComponent},
  { path: 'accountinfo', component: AccountInfoComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistratieComponent,
    NavBarComponent,
    AccountAanmakenComponent,
    UsertableComponent,
    UrenoverzichtComponent,
    AccountInfoComponent,
    UrenoverzichtFilterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService, ApiService, AuthorizationService, UrenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
