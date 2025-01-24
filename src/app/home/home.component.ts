import { Component, inject } from '@angular/core';
import { RedditService } from '../shared/data/reddit.service';
@Component({
  selector: 'app-home',
  template: `<h1>Home</h1>`,
})
export default class HomeComponent {
  redditService = inject(RedditService);
}
