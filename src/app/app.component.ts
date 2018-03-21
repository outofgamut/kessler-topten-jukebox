import { Component, OnInit } from '@angular/core';
import { Howl } from 'howler';
import { PlaylistService } from './playlist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(
    public playlistService: PlaylistService,
  ) { }

  ngOnInit(): void {
    this.playlistService.play(0);
  }
}
