import { Injectable, OnInit } from '@angular/core';

export interface Song {
  title: string;
  artist: string;
  path: string;
  category: string;
  howl?: Howl;
}

@Injectable()
export class PlaylistService {

  sound: Howl;
  playingIndex = 0;
  currentSong: Song;
  playlist: Array<Song> = [
    {
      title: 'Helicopter',
      artist: 'Test Artist',
      path: 'assets/Songs/helicopter.mp3',
      category: 'Texas-Nashville connection'
    },
    {
      title: 'Sweeping',
      artist: 'Test Artist',
      path: 'assets/Songs/sweeping.mp3',
      category: 'Texas-Nashville connection'
    },
    {
      title: 'My heroes have always been Cowboys',
      artist: 'Willie Nelson',
      path: 'assets/Songs/Phaseone/Unknown Album/Daily Routine.mp3',
      category: 'Texas-Nashville connection'
    },
    {
      title: 'Bobbie McGee',
      artist: 'Kris Kristopherson',
      path: 'assets/Songs/Phaseone/White Collar Crime/10 No Slack.mp3',
      category: 'Texas-Nashville connection'
    },
    {
      title: 'Luckenbach, TX',
      artist: 'Jerry Jeff Walker',
      path: 'assets/Songs/Phaseone/Unknown Album/Daily Routine.mp3',
      category: 'Texas-Nashville connection'
    },
    {
      title: 'Good Hearted Woman',
      artist: 'Waylon Jennings',
      path: 'assets/Songs/Phaseone/Unknown Album/Daily Routine.mp3',
      category: 'Texas-Nashville connection'
    },
    {
      title: 'London Homesick Blues',
      artist: 'Gary P Nunn',
      path: 'assets/Songs/Phaseone/Unknown Album/Daily Routine.mp3',
      category: 'Texas-Nashville connection'
    },
    {
      title: 'Pancho and Lefty',
      artist: 'Townes Van Zandt',
      path: 'assets/Songs/Phaseone/Unknown Album/Daily Routine.mp3',
      category: 'Texas-Nashville connection'
    },
    {
      title: 'He Stopped Loving Her today',
      artist: 'George Jones',
      path: 'assets/Songs/Phaseone/Unknown Album/Daily Routine.mp3',
      category: 'Texas-Nashville connection'
    },
    {
      title: 'Desperados Waiting for a Train',
      artist: 'Guy Clarke',
      path: 'assets/Songs/Phaseone/Unknown Album/Daily Routine.mp3',
      category: 'Texas-Nashville connection'
    },
  ];

  constructor() { }




  /**
 * Skip to the next or previous track.
 * @param  {String} direction 'next' or 'prev'.
 */
  skip(direction: string) {

    let index = 0;
    if (direction === 'prev') {
      index = this.playingIndex - 1;
      if (index < 0) {
        index = this.playlist.length - 1;
      }
    } else {
      index = this.playingIndex + 1;
      if (index >= this.playlist.length) {
        index = 0;
      }
    }

    this.skipTo(index);

  }

  play(index: number) {
    const self = this;
    this.currentSong = this.playlist[index];
    if (this.currentSong.howl) {
      this.sound = this.currentSong.howl;
    } else {
      this.sound = this.currentSong.howl = new Howl({
        src: this.currentSong.path,
        html5: true, // Force to HTML5 so that the audio can stream in (best for large files).
        onplay: function () {
          // Display the duration.
          // duration.innerHTML = self.formatTime(Math.round(sound.duration()));

          // Start upating the progress of the track.

          // Start the wave animation if we have already loaded
        },
        onend: function () {
          // Stop the wave animation.
          self.skip('next');
        },
      });
    }

    // Begin playing the sound.
    this.sound.play();

    // Keep track of the index we are currently playing.
    this.playingIndex = index;
  }
    /**
   * Skip to a specific track based on its playlist index.
   * @param  {Number} index Index in the playlist.
   */
  skipTo(index: number) {

    // Stop the current track.
    if (this.playlist[this.playingIndex].howl) {
      this.playlist[this.playingIndex].howl.stop();
    }

    // Play the new track.
    this.play(index);
  }

  pause() {
    this.sound.pause();
    console.log(this.sound.playing());
  }

  resume() {
    this.sound.play();
    console.log(this.sound.playing());
  }

  stop() {
    this.sound.stop();
  }

  formatTime(secs: number) {
    console.log('secs', secs);
    const roundedSecs = Math.round(secs);
    const minutes = Math.floor(roundedSecs / 60) || 0;
    const seconds = (roundedSecs - minutes * 60) || 0;

    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
  }
}

