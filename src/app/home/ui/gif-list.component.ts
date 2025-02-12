import { Component, inject, input } from '@angular/core';
import { Gif } from '../../shared/interfaces';
import { GifPlayerComponent } from './gif-player.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-gif-list',
  template: `
    @for (gif of gifs(); track gif.permalink){
    <div>
      <mat-toolbar>
        <span>{{ gif.name }}</span>
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
  windowToken = inject(Window);
  gifs = input.required<Gif[]>();
}
