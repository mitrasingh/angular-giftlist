import { Component, inject } from '@angular/core';
import { RedditService } from '../shared/data/reddit.service';
import { GifListComponent } from './ui/gif-list.component';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';
import { SearchBarComponent } from './ui/searchbar.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-home',
  template: `
    <app-search-bar [subredditFormControl]="redditService.subredditFormControl">
    </app-search-bar>

    @if (redditService.loading()) {
    <mat-progress-spinner mode="indeterminate" diameter="50" />
    } @else {
    <app-gif-list
      [gifs]="redditService.gifs()"
      infinite-scroll
      (scrolled)="redditService.pagination$.next(redditService.lastKnownGif())"
      class="grid-container"
    />
    }
  `,
  imports: [
    GifListComponent,
    InfiniteScrollDirective,
    SearchBarComponent,
    MatProgressSpinnerModule,
  ],
})
export default class HomeComponent {
  redditService = inject(RedditService);
}
