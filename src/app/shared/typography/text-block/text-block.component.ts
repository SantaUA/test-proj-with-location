import { Component, Input } from '@angular/core';

@Component({
  selector: 'text-block',
  template: ` <p class="text-block">{{ text }} <ng-content></ng-content></p> `,
  styles: [
    `
      .text-block {
        font-size: 15px;
        color: #ffffff;
        line-height: 1.3;
      }
    `,
  ],
})
export class TextBlockComponent {
  @Input('text') text: string = '';
}
