import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// modules
import { UsersModule } from './users/users.module';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  // declarations take cares of Components, Directives, Pipes
  declarations: [AppComponent, NavbarComponent],
  // Import take cares of Modules
  imports: [BrowserModule, AppRoutingModule, UsersModule],
  // providers take cares of Services
  providers: [],
  // bootstrap is the root component of the app
  bootstrap: [AppComponent],
})
export class AppModule {}
