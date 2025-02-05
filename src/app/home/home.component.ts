import { Component, inject } from '@angular/core';
import { RedditService } from '../shared/data/reddit.service';
import { GifListComponent } from './ui/gif-list.component';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';
@Component({
  selector: 'app-home',
  template: `
    <h1>Home</h1>
    <app-gif-list
      [gifs]="redditService.gifs()"
      infiniteScroll
      (scrolled)="redditService.pagination$.next(redditService.lastKnownGif())"
      class="grid-container"
    ></app-gif-list>
  `,
  imports: [GifListComponent, InfiniteScrollDirective],
})
export default class HomeComponent {
  redditService = inject(RedditService);
}
