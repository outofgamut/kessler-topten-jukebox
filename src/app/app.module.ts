import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PlaylistService } from './playlist.service';
import { SongCardComponent } from './song-card/song-card.component';


@NgModule({
  declarations: [
    AppComponent,
    SongCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ PlaylistService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
