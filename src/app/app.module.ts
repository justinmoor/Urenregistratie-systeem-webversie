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
import { FilterPipe } from './pipes/filter-pipe.pipe';
import { SortByPipe } from './pipes/sort-by.pipe';
import { PathGuardGuard } from './guards/path-guard.guard';
import { AdminGuard } from './guards/admin.guard';

import { CsvService } from 'angular2-json2csv';
import { UpdateHoursComponent } from './components/update-hours/update-hours.component';
import { AdminHoursOverviewComponent } from './components/admin-hours-overview/admin-hours-overview.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'registratie', component: RegisterHoursComponent, canActivate:[PathGuardGuard]},
  { path: 'wijzigen', component: UpdateHoursComponent, canActivate:[PathGuardGuard]},
  { path: 'accountmaken', component: CreateAccountComponent, canActivate:[PathGuardGuard, AdminGuard]},
  { path: 'gebruikers', component: UserOverviewComponent, canActivate:[PathGuardGuard, AdminGuard]},
  { path: 'urenoverzicht', component: HoursOverviewComponent, canActivate:[PathGuardGuard]},
  { path: 'accountinfo', component: AccountInfoComponent, canActivate:[PathGuardGuard]},
  { path: 'adminurenoverzicht', component: AdminHoursOverviewComponent, canActivate:[AdminGuard]}
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
    FilterPipe,
    SortByPipe,
    UpdateHoursComponent,
    AdminHoursOverviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],

  providers: [UserService, ApiService, AuthorizationService, CsvService, HoursService, PathGuardGuard, AdminGuard,  FilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
