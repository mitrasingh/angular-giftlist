import { Component, inject } from '@angular/core';
import { RedditService } from '../shared/data/reddit.service';
import { GifListComponent } from './ui/gif-list.component';
@Component({
  selector: 'app-home',
  template: `
    <h1>Home</h1>
    <app-gif-list
      [gifs]="redditService.gifs()"
      class="grid-container"
    ></app-gif-list>
  `,
  imports: [GifListComponent],
})
export default class HomeComponent {
  redditService = inject(RedditService);
}
