import { Component, inject } from '@angular/core';
import { RedditService } from '../shared/data/reddit.service';
import { GiftListComponent } from './ui/gif-list.component';
@Component({
  selector: 'app-home',
  template: `
    <h1>Home</h1>
    <app-gif-list [gifs]="this.redditService.gifs()"></app-gif-list>
  `,
  imports: [GiftListComponent],
})
export default class HomeComponent {
  redditService = inject(RedditService);
}
