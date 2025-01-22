import { computed, Injectable, signal } from '@angular/core';
import { Gif } from '../interfaces/gif';
import { of } from 'rxjs';

export interface GifsState {
  gifs: Gif[];
}

@Injectable({
  providedIn: 'root',
})
export class RedditService {
  // state
  private state = signal<GifsState>({
    gifs: [],
  });

  // selectors
  gifs = computed(() => this.state().gifs);

  // sources
  gifsLoaded$ = of([
    {
      src: '',
      author: '',
      name: '',
      permalink: '',
      title: 'test gif',
      thumnail: '',
      comments: 0,
    },
  ]);
}
