import {
  Component,
  computed,
  ElementRef,
  input,
  signal,
  viewChild,
} from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { fromEvent, Subject, switchMap } from 'rxjs';
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
    <div>
      <video
        (click)="togglePlay$.next()"
        #gifPlayer
        playsinline
        preload="none"
        [loop]="true"
        [muted]="true"
        [src]="src()"
      ></video>
    </div>
  `,
  imports: [MatProgressSpinnerModule],
})
export class GifPlayerComponent {
  src = input.required<string>();
  thumbnail = input.required<string>();

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

  videoElement = viewChild.required<ElementRef<HTMLVideoElement>>('gifPlayer');
  videoElement$ = toObservable(this.videoElement);

  videoLoadStart$ = this.togglePlay$.pipe(
    switchMap(() => this.videoElement$),
    switchMap(({ nativeElement }) => fromEvent(nativeElement, 'loadstart'))
  );
}
