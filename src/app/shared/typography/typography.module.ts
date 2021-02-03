import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainTitleComponent } from './main-title/main-title.component';
import { SecondaryTitleComponent } from './secondary-title/secondary-title.component';
import { TextBlockComponent } from './text-block/text-block.component';

@NgModule({
  imports: [CommonModule],
  declarations: [MainTitleComponent, SecondaryTitleComponent, TextBlockComponent],
  exports: [MainTitleComponent, SecondaryTitleComponent, TextBlockComponent],
})
export class TypographyModule {}
