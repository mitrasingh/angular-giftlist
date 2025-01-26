import { Component, computed, input, signal } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Subject } from 'rxjs';
interface GifPlayerState {
  playing: boolean;
  status: 'initial' | 'loading' | 'loaded';
}
@Component({
  selector: 'app-gif-player',
  template: `
    @if (status() === 'loading') {
    <mat-progress-spinner />
    }
  `,
  imports: [MatProgressSpinnerModule],
})
export class GifPlayerComponent {
  src = input.required<string>();

  // state
  state = signal<GifPlayerState>({
    playing: false,
    status: 'initial',
  });

  // selectors
  playing = computed(() => this.state().playing);
  status = computed(() => this.state().status);

  // source
  togglePlay$ = new Subject<void>();
}
