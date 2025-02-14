import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RedditService } from './shared/data/reddit.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `<router-outlet />`,
  styles: [],
})
export class AppComponent {
  redditService = inject(RedditService);
}
