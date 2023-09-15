import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AddComponent } from './catalog/add/add.component';
import { ListComponent } from './catalog/list/list.component';
import { DeleteComponent } from './catalog/delete/delete.component';
import { CatalogService } from './catalog.service';
import { CatalogComponent } from './catalog/catalog.component';
import { LoggerService } from './logger.service';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ListComponent,
    DeleteComponent,
    CatalogComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [CatalogService, LoggerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
