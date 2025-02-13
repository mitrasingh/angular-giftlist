import { Component, inject, input } from '@angular/core';
import { Gif } from '../../shared/interfaces';
import { GifPlayerComponent } from './gif-player.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { WINDOW } from '../../shared/utils/injection-tokens';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-gif-list',
  template: `
    @for (gif of gifs(); track gif.permalink){
    <div>
      <app-gif-player
        [src]="gif.src"
        [thumbnail]="gif.thumbnail"
      ></app-gif-player>
      <mat-toolbar>
        <span>{{ gif.title }}</span>
        <span class="toolbar-spacer"></span>
        <button
          mat-icon-button
          (click)="window.open('https://reddit.com/' + gif.permalink)"
        >
          <mat-icon>comment</mat-icon>
        </button>
      </mat-toolbar>
    </div>
    } @empty {
    <p>No gifs found</p>
    }
  `,
  imports: [GifPlayerComponent, MatToolbarModule, MatIconModule],
})
export class GifListComponent {
  window = inject(WINDOW);
  gifs = input.required<Gif[]>();
}
