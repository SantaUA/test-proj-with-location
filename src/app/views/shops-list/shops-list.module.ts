import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopsListComponent } from './shops-list.component';
import { ShopCardComponent } from './components/shop-card/shop-card.component';
import { TypographyModule } from 'src/app/shared/typography/typography.module';
import { ShopsListService } from './services/shops-list.service';
import { LoaderModule } from 'src/app/shared/loader/loader.module';

@NgModule({
  imports: [CommonModule, TypographyModule, LoaderModule],
  declarations: [ShopsListComponent, ShopCardComponent],
  exports: [ShopsListComponent, ShopCardComponent],
  providers: [ShopsListService],
})
export class ShopsListModule {}
