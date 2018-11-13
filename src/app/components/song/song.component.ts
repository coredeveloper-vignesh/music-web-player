import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PlayerService, PlaybackStates } from 'src/app/services/player.service';
import { SongModel } from 'src/app/models/song-model';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']
})
export class SongComponent {

  @Input() songData: SongModel;
  @Output() uponClick: EventEmitter<any> = new EventEmitter();

  isHovering = false;
  playbackStates = PlaybackStates;

  constructor(private playerService: PlayerService) { }

  isSelected(): boolean {
    return this.songData.id === this.playerService.nowPlayingItem.id;
  }

  playNext(): void {
    this.playerService.playNext( this.songData );
  }
}