import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YMDHMComponent } from './y-m-d-h-m/y-m-d-h-m.component';
import { YMDHMSComponent } from './y-m-d-h-m-s/y-m-d-h-m-s.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    YMDHMComponent,
    YMDHMSComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
