import { Component, input } from '@angular/core';
import { Gif } from '../../shared/interfaces/gif';

@Component({
  selector: 'app-gif-list',
  template: `
    @for (gif of gifs(); track gif.permalink) {
    <div>
      {{ gif.title }}
    </div>
    }
  `,
})
export class GiftListComponent {
  gifs = input.required<Gif[]>();
}
