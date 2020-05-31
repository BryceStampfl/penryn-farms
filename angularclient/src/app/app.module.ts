import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import {UserService} from "./service/user.service";
import { HeaderComponent } from './header/header.component';
import { TileComponent } from './tiles/tile-list/tile/tile.component';
import { TileListComponent } from './tiles/tile-list/tile-list.component';
import {TileService} from "./tiles/tile.service";

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserFormComponent,
    HeaderComponent,
    TileComponent,
    TileListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TileService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
