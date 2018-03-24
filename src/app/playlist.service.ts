import { Injectable, OnInit } from '@angular/core';

export interface Song {
  title: string;
  artist: string;
  path: string;
  category: string;
  img?: string;
  howl?: Howl;
}

@Injectable()
export class PlaylistService {

  sound: Howl;
  currentSong: Song;
  playlist: Array<Song> = [
    {
      title: 'My heroes have always been Cowboys',
      artist: 'Willie Nelson',
      path: 'assets/Songs/Willie Nelson/Greatest Hits (& Some That Will Be)/13 - My Heroes Have Always Been Cowboys.mp3',
      img: 'assets/Images/album/Willie Nelson  “My heroes have always been Cowboys”.jpg',
      category: 'Texas-Nashville connection'
    },
    {
      title: 'Bobbie McGee',
      artist: 'Kris Kristopherson',
      path: 'assets/Songs/Kris Kristofferson/16 Biggest Hits/01 - Me and Bobby McGee.mp3',
      img: 'assets/Images/album/Kris Kristopherson.jpg',
      category: 'Texas-Nashville connection'
    },
    {
      title: 'Mr. Bojangles',
      artist: 'Jerry Jeff Walker',
      path: 'assets/Songs/Jerry Jeff Walker/Mr. Bojangles/02 - Mr. Bojangles.mp3',
      img: 'assets/Images/album/jerry jeff walker mr bojangles.jpg',
      category: 'Texas-Nashville connection'
    },
    {
      title: 'Good Hearted Woman',
      artist: 'Waylon Jennings',
      path: 'assets/Songs/Waylon Jennings/Good Hearted Woman/01 - Good Hearted Woman.mp3',
      img: 'assets/Images/album/Waylon Jennings - Good Hearted Woman.jpg',
      category: 'Texas-Nashville connection'
    },
    {
      title: 'London Homesick Blues',
      artist: 'Gary P. Nunn',
      path: 'assets/Songs/Gary P. Nunn/What I Like About Texas - Greatest Hits/16 - London Homesick Blues _ Home With the Armadillo.mp3',
      img: 'assets/Images/album/Gary P Nunn - London Homesick Blues.jpg',
      category: 'Texas-Nashville connection'
    },
    {
      title: 'Pancho and Lefty',
      artist: 'Townes Van Zandt',
      path: 'assets/Songs/Townes Van Zandt/Rear View Mirror/01 - Pancho and Lefty.mp3',
      img: 'assets/Images/album/Townes Van Zandt - Pancho and Lefty.jpg',
      category: 'Texas-Nashville connection'
    },
    {
      title: 'He Stopped Loving Her today',
      artist: 'George Jones',
      path: 'assets/Songs/George Jones/Best Of The Best George Jones/07 - He Stopped Loving Her Today.mp3',
      img: 'assets/Images/album/George Jones- He Stopped Loving Her today.jpg',
      category: 'Texas-Nashville connection'
    },
    {
      title: 'Desperados Waiting for a Train',
      artist: 'Guy Clark',
      path: 'assets/Songs/Guy Clark/The Essential Guy Clark/02 - Desperados Waiting For A Train.mp3',
      img: 'assets/Images/album/Guy Clarke - Desperados Waiting for a Train.jpg',
      category: 'Texas-Nashville connection'
    },
    {
      title: 'Dressing Room Walls',
      artist: 'Old 97\'s',
      path: 'assets/Songs/Old 97\'s/Wreck Your Life/06 - Dressing Room Walls.mp3',
      img: 'assets/Images/album/Old 97s  Dressing Room Walls.jpg',
      category: 'North Texas Heroes'
    },
    {
      title: 'Possum Kingdom',
      artist: 'The Toadies',
      path: 'assets/Songs/The Toadies/Rubberneck/04 - Possum Kingdom.mp3',
      img: 'assets/Images/album/Toadies Possum Kingdom.jpg',
      category: 'North Texas Heroes'
    },
    {
      title: 'What I Am',
      artist: 'Edie Brickell & New Bohemians',
      path: 'assets/Songs/Edie Brickell & New Bohemians/Shooting Rubberbands At The Stars/01 - What I Am (Album Version).mp3',
      img: 'assets/Images/album/Edie Brickell and New Bohemians - “What I am”.jpg',
      category: 'North Texas Heroes'
    },
    {
      title: 'Mother Blues',
      artist: 'Ray Wylie Hubbard',
      path: 'assets/Songs/Ray Wylie Hubbard/The Grifter\'s Hymnal/09 - Mother Blues.mp3',
      img: 'assets/Images/album/Ray Wylie Hubbard - Mother Blues.jpg',
      category: 'North Texas Heroes'
    },
    {
      title: 'Texas Flood',
      artist: 'Stevie Ray Vaughan',
      path: 'assets/Songs/Stevie Ray Vaughan & Double Trouble/Texas Flood/03 - Texas Flood.mp3',
      img: 'assets/Images/album/Stevie Ray Vaughan - Texas Flood.jpg',
      category: 'North Texas Heroes'
    },
    {
      title: 'Trinity River Blues',
      artist: 'Oak Cliff T-Bone (Walker)',
      path: 'assets/Songs/Oak Cliff T-Bone (Walker)/Trinity River Blues/01 - Trinity River Blues.mp3',
      img: 'assets/Images/album/T-Bone Walker- Trinity River Blues.jpg',
      category: 'North Texas Heroes'
    },
    {
      category: 'Texas New Face',
      title: 'Hanging out on the Line',
      artist: 'Paul Cauthen',
      img: 'assets/Images/album/Paul Cauthen - hanging out on the line.jpg',
      path: 'assets/Songs/Paul Cauthen/My Gospel/09 - Hanging out on the Line.mp3',
    },
    {
      category: 'Texas New Face',
      title: 'Come on up to the House',
      artist: 'Sarah Jarosz',
      img: 'assets/Images/album/Sarah Jarosz- Come on up to the house.jpg',
      path: 'assets/Songs/Sarah Jarosz/Song Up In Her Head/12 - Come On Up To The House.mp3',
    },
    {
      category: 'Texas New Face',
      title: 'Bright Lights',
      artist: 'Gary Clark Jr.',
      path: 'assets/Songs/Gary Clark Jr./The Bright Lights EP/01 - Bright Lights.mp3',
      img: 'assets/Images/album/Gary Clark, Jr. - “Bright Lights”.jpg',
    },
    {
      category: 'Texas New Face',
      title: 'Coming Home',
      artist: 'Leon Bridges',
      path: 'assets/Songs/Leon Bridges/Coming Home/01 - Coming Home.mp3',
      img: 'assets/Images/album/Leon Bridges - “Coming Home”.jpg',
    },
    {
      category: 'Texas New Face',
      title: 'Gwan',
      artist: 'The Suffers',
      path: 'assets/Songs/The Suffers/Gwan/01 - Gwan.mp3',
      img: 'assets/Images/album/Suffers- Gwan.jpg',
    },
    {
      category: 'Texas New Face',
      title: 'Roll the Bones',
      artist: 'Shakey Graves',
      path: 'assets/Songs/Shakey Graves/Shakey Graves on Audiotree Live (2013) [Explicit]/01 - Roll The Bones (Audiotree Live Version).mp3',
      img: 'assets/Images/album/Shakey Graves - Roll The Bones.jpg',
    },
    {
      category: 'Texas New Face',
      title: 'Shakin\' All Over',
      artist: 'The Texas Gentlemen',
      path: 'assets/Songs/The Texas Gentlemen/TX Jelly/10 - Shakin\' All Over.mp3',
      img: 'assets/Images/album/Texas Gentlemen - Shakin All Over.jpg',
    },
    {
      category: 'Texas New Face',
      title: 'Trinity River',
      artist: 'Charley Crockett',
      path: 'assets/Songs/Charley Crockett/A Stolen Jewel [Explicit]/05 - Trinity River.mp3',
      img: 'assets/Images/album/Charley Crockett - Trinity River.jpg',
    },
    {
      category: 'Adopted Texans',
      title: 'Old Time Religion',
      artist: 'Parker Milsap',
      path: 'assets/Songs/Parker Millsap/Parker Millsap/01 - Old Time Religion.mp3',
      img: 'assets/Images/album/Parker Milsap - Old Time Religion.jpg',
    },
    {
      category: 'Adopted Texans',
      title: 'Hurtin\' (On the Bottle)',
      artist: 'Margo Price',
      path: 'assets/Songs/Margo Price/Midwest Farmer\'s Daughter/09 - Hurtin\' (On the Bottle).mp3',
      img: 'assets/Images/album/Margo Price - Hurtin On the Bottle.jpg',
    },
    {
      category: 'Adopted Texans',
      title: 'Moving',
      artist: 'John Fulbright',
      path: 'assets/Songs/John Fullbright/From The Ground Up/09 - Moving.mp3',
      img: 'assets/Images/album/John Fulbright - Moving.jpg',
    },
    {
      category: 'Adopted Texans',
      title: 'Gasoline',
      artist: 'Shovels & Rope',
      path: 'assets/Songs/Shovels & Rope/Shovels & Rope/01 - Gasoline.mp3',
      img: 'assets/Images/album/Shovels and Rope – Gasoline.jpg',
    },
    {
      category: 'Adopted Texans',
      title: 'In Bloom',
      artist: 'Sturgill Simpson',
      path: 'assets/Songs/Sturgill Simpson/A Sailor\'s Guide to Earth/05 - In Bloom.mp3',
      img: 'assets/Images/album/Sturgill Simpson - In Bloom.jpg',
    },
    {
      category: 'Adopted Texans',
      title: 'If We Were Vampires',
      artist: 'Jason Isabell',
      path: 'assets/Songs/Jason Isbell and the 400 Unit/The Nashville Sound/05 - If We Were Vampires.mp3',
      img: 'assets/Images/album/Jason Isabell – If we were Vampires.jpg',
    },
    {
      category: 'Best of the Rest',
      title: 'Dallas',
      artist: 'Joe Ely',
      path: 'assets/Songs/Joe Ely/The Best Of Joe Ely/11 - Dallas.mp3',
      img: 'assets/Images/album/Joe Ely - Dallas by DC 9 at Night.jpg',
    },
    {
      category: 'Best of the Rest',
      title: 'I Hope You Dance',
      artist: 'Lee Ann Womack',
      path: 'assets/Songs/Lee Ann Womack/I Hope You Dance/02 - I Hope You Dance.mp3',
      img: 'assets/Images/album/Lee Ann Womack I hope you Dance.jpg',
    },
    {
      category: 'Best of the Rest',
      title: 'Ring of Fire',
      artist: 'Ruthie Foster',
      path: 'assets/Songs/Ruthie Foster/Let It Burn/07 - Ring Of Fire.mp3',
      img: 'assets/Images/album/Ruthie Foster - Ring of Fire.jpg',
    },
    {
      category: 'Best of the Rest',
      title: 'Amarillo Highway',
      artist: 'Terry Allen',
      path: 'assets/Songs/Terry Allen/Lubbock (on everything)/01 - Amarillo Highway (for Dave Hickey).mp3',
      img: 'assets/Images/album/Terry Allen - Amarillo Highway.jpg',
    },
    {
      category: 'Best of the Rest',
      title: 'East Texas Rust',
      artist: 'Shinyribs',
      path: 'assets/Songs/Shinyribs/Pickathon 2008/14 - East Texas Rust.mp3',
      img: 'assets/Images/album/Shinyribs - East Texas Rust.jpg',
    },
    {
      category: 'Best of the Rest',
      title: 'Drunken Poets Dream',
      artist: 'Hayes Carll',
      path: 'assets/Songs/Hayes Carll/Trouble In Mind/01 - Drunken Poet\'s Dream (Album Version).mp3',
      img: 'assets/Images/album/Hayes Carll - Drunken Poets Dream.jpg',
    },
    {
      category: 'Best of the Rest',
      title: 'Let the Light In',
      artist: 'Bob Schneider',
      path: 'assets/Songs/Bob Schneider/A Perfect Day/01 - Let the Light In.mp3',
      img: 'assets/Images/album/Bob Schneider -Let the light in.jpg',
    },
    {
      category: 'Best of the Rest',
      title: 'Summertime',
      artist: 'Kat Edmonson',
      path: 'assets/Songs/Kat Edmonson/Take To The Sky/01 - Summertime.mp3',
      img: 'assets/Images/album/Kat Edmonson- Summertime.jpg',
    },
    {
      category: 'Best of the Rest',
      title: 'Choctaw Bingo',
      artist: 'James McMurtry',
      path: 'assets/Songs/James McMurtry/Saint Mary Of The Woods/10 - Choctaw Bingo.mp3',
      img: 'assets/Images/album/James McMurtry Choctaw Bingo.jpg',
    },
  ];
  playingIndex = 0;
  previousIndex = this.playlist.length - 1;
  nextIndex = 1;

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

  isPlaying(index: number) {
    return this.playingIndex === index;
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
    this.previousIndex = index > 0 ? index - 1 : this.playlist.length - 1;
    this.nextIndex = index < this.playlist.length - 1 ? index + 1 : 0;
  }
  /**
 * Skip to a specific track based on its playlist index.
 * @param  {Number} index Index in the playlist.
 */
  skipTo(index: number) {
    this.sound.stop();
    this.sound.unload();
    // Stop the current track.
    if (this.playlist[this.playingIndex].howl) {
      console.log('index', this.playingIndex, 'stopped');
      this.playlist[this.playingIndex].howl.stop();
      this.playlist[this.playingIndex].howl.unload();
    }

    this.play(index);
  }

  pause() {
    this.sound.pause();
  }

  resume() {
    this.sound.play();
  }

  stop() {
    this.sound.stop();
  }

  formatTime(secs) {
    const roundedSecs = Math.round(secs);
    const minutes = Math.floor(roundedSecs / 60) || 0;
    const seconds = (roundedSecs - minutes * 60) || 0;

    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
  }

}

