import { computed, Injectable, signal } from '@angular/core';
import { Gif } from '../interfaces/gif';

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
}
