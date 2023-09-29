import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoggerService } from './logger.service';
// import { ItemComponent } from './item/item.component';
import { PipePipe } from './pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    // ItemComponent,
    PipePipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [LoggerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
