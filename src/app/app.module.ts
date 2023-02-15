import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserCardComponent } from './components/user-card/user-card.component';
import { FormsModule } from '@angular/forms';
import { AlbumsComponent } from './pages/albums/albums.component';
import { UsersComponent } from './pages/users/users.component';
import { AlbumCardComponent } from './components/album-card/album-card.component';


@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    AlbumsComponent,
    UsersComponent,
    AlbumCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
