import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { AuthGuard } from './core/guards/auth.guard';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { AuthInterceptor } from './auth.interceptor';
import { FarmerListComponent } from './features/farmers/farmer-list/farmer-list.component';
import { AddFarmerComponent } from './features/farmers/add-farmer/add-farmer.component';
import { EditFarmerComponent } from './features/farmers/edit-farmer/edit-farmer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    DashboardComponent,
    FarmerListComponent,
    AddFarmerComponent,
    EditFarmerComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([

      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },

      {
        path: 'login',
        component: LoginComponent
      },

      {
        path: 'register',
        component: RegisterComponent
      },

      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'farmers',
        component: FarmerListComponent,
        canActivate: [AuthGuard]
      },

      {
        path: 'add-farmer',
        component: AddFarmerComponent,
        canActivate: [AuthGuard]
      },

      {
        path: 'edit-farmer/:id',
        component: EditFarmerComponent,
        canActivate: [AuthGuard]
      }

    ])
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
