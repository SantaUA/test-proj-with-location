import { Component, Input } from '@angular/core';

@Component({
  selector: 'secondary-title',
  template: ` <p class="secondary-title">{{ text }}</p> `,
  styles: [
    `
      .secondary-title {
        font-size: 18px;
        font-weight: bold;
        line-height: 21px;
      }
    `,
  ],
})
export class SecondaryTitleComponent {
  @Input('text') text: string = '';
}
