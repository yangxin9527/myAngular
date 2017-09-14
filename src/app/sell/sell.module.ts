import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SellComponent } from '../sell/sell.component';
import { sellRouters } from './sell.routers';
import { SellDetailComponent } from './sell-detail/sell-detail.component';
import { SellDetail2Component } from './sell-detail2/sell-detail2.component';

@NgModule({
  declarations: [
    SellComponent,
    SellDetailComponent,
    SellDetail2Component
  ],
  imports: [
    RouterModule.forChild(sellRouters)
  ]
})
export class SellModule { }
