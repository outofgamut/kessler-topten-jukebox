import { Component, OnInit, Input } from '@angular/core';
import { Song, PlaylistService } from '../playlist.service';

@Component({
  selector: 'app-song-card',
  templateUrl: './song-card.component.html',
  styleUrls: ['./song-card.component.scss']
})
export class SongCardComponent implements OnInit {

  @Input() song: Song;
  @Input() i: number;
  @Input() label: string;

  constructor(
    public playlistService: PlaylistService
  ) { }

  ngOnInit() {
  }

}
