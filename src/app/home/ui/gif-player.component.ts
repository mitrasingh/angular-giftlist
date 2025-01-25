import { Component, signal } from '@angular/core';

interface GifPlayerState {
  playing: boolean;
  status: 'initial' | 'loading' | 'loaded';
}

@Component({
  selector: 'app-gif-player',
  template: `<p>Gif Player</p>`,
})
export class GifPlayerComponent {
  state = signal<GifPlayerState>({
    playing: false,
    status: 'initial',
  });
}
