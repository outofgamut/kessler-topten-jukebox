import { Component, OnInit, OnDestroy } from '@angular/core';
import { Howl } from 'howler';
import { PlaylistService } from './playlist.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import 'rxjs/add/observable/interval';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Dallas Assembly';
  position: any;
  sub: Subscription;

  constructor(
    public playlistService: PlaylistService,
  ) { }

  ngOnInit(): void {
    this.playlistService.play(0);


    this.sub = Observable.interval(1000)
    .subscribe((val) => this.getPosition());
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  getPosition() {
    this.position = this.playlistService.sound.seek();
  }
}
