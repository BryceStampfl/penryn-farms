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
import { ThumbnailComponent } from './thumbnails/thumbnail/thumbnail.component';
import { ThumbnailListComponent } from './thumbnails/thumbnail-list/thumbnail-list.component';
import {ThumbnailService} from "./thumbnails/thumbnail.service";
import { JumbotronComponent } from './jumbotron/jumbotron.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserFormComponent,
    HeaderComponent,
    ThumbnailComponent,
    ThumbnailListComponent,
    JumbotronComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService, ThumbnailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
