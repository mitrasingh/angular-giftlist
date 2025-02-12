import { Component, inject, input } from '@angular/core';
import { Gif } from '../../shared/interfaces';
import { GifPlayerComponent } from './gif-player.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { WINDOW } from '../../shared/utils/injection-tokens';

@Component({
  selector: 'app-gif-list',
  template: `
    @for (gif of gifs(); track gif.permalink){
    <div>
      <mat-toolbar>
        <span>{{ gif.title }}</span>
      </mat-toolbar>
      <app-gif-player
        [src]="gif.src"
        [thumbnail]="gif.thumbnail"
      ></app-gif-player>
    </div>
    }
  `,
  imports: [GifPlayerComponent, MatToolbarModule],
})
export class GifListComponent {
  window = inject(WINDOW);
  gifs = input.required<Gif[]>();
}
