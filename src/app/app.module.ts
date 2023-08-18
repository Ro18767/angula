import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocialsComponent } from './socials/socials.component';
import { TelegramComponent } from './socials/telegram/telegram.component';
import { InstagramComponent } from './socials/instagram/instagram.component';
import { CounterComponent } from './counter/counter.component';
import { FruitComponent } from './fruit/fruit.component';

@NgModule({
  declarations: [
    AppComponent,
    SocialsComponent,
    TelegramComponent,
    InstagramComponent,
    CounterComponent,
    FruitComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
