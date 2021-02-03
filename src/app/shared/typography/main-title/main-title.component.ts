import { Component, Input } from '@angular/core';

@Component({
  selector: 'main-title',
  template: ` <p class="main-title">{{ text }}</p> `,
  styles: [
    `
      .main-title {
        font-weight: bold;
        font-size: 25px;
        color: #ffffff;
        line-height: 1.2;
      }
    `,
  ],
})
export class MainTitleComponent {
  @Input('text') text: string = '';
}
