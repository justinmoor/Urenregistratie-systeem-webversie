import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterHoursComponent } from './components/register-hours/register-hours.component';
import { UserService } from './services/user.service';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthorizationService } from './services/authorization.service';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { UserOverviewComponent } from './components/user-overview/user-overview.component';
import { HoursOverviewComponent } from './components/hours-overview/hours-overview.component';
import { HoursService } from './services/hours.service';
import { AccountInfoComponent } from './components/account-info/account-info.component';
import { HoursOverviewFilterComponent } from './components/hours-overview-filter/hours-overview-filter.component';
import { FilterPipe } from './pipes/filter-pipe.pipe';
import { SortByPipe } from './pipes/sort-by.pipe'

// import { ApiService } from './services/api.service';
// import { AuthorizationService } from './services/authorization.service';

// Create ruotes
const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'registratie', component: RegisterHoursComponent},
  { path: 'accountmaken', component: CreateAccountComponent},
  { path: 'gebruikers', component: UserOverviewComponent},
  { path: 'urenoverzicht', component: HoursOverviewComponent},
  { path: 'accountinfo', component: AccountInfoComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterHoursComponent,
    NavBarComponent,
    CreateAccountComponent,
    UserOverviewComponent,
    HoursOverviewComponent,
    AccountInfoComponent,
    HoursOverviewFilterComponent,
    FilterPipe,
    SortByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService, ApiService, AuthorizationService, HoursService],
  bootstrap: [AppComponent]
})
export class AppModule { }
