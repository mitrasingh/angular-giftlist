import { Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  template: `
    Search Sub Reddit Gif:
    <input type="text" [formControl]="subredditFormControl()" />
  `,
  imports: [ReactiveFormsModule],
})
export class SearchBarComponent {
  subredditFormControl = input.required<FormControl>();
}
