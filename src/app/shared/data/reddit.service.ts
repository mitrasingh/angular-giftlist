import { Injectable, signal } from '@angular/core';
import { Gif } from '../interfaces/gif';

export interface GifsState {
  gifs: Gif[];
}

@Injectable({
  providedIn: 'root',
})
export class RedditService {
  private state = signal<GifsState>({
    gifs: [],
  });
}
