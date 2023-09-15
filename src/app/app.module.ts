import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { AvatarComponent } from './user/avatar/avatar.component';
import { AvatarSettingsComponent } from './user/avatar-settings/avatar-settings.component';
import { AddComponent } from './catalog/add/add.component';
import { ListComponent } from './catalog/list/list.component';
import { DeleteComponent } from './catalog/delete/delete.component';
import { CatalogService } from './catalog.service';
import { CatalogComponent } from './catalog/catalog.component';
import { LoggerService } from './logger.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AvatarComponent,
    AvatarSettingsComponent,
    AddComponent,
    ListComponent,
    DeleteComponent,
    CatalogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [CatalogService, LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
