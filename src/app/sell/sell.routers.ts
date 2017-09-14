import { SellComponent } from '../sell/sell.component';
import { RouterModule } from '@angular/router';
import { SellDetailComponent } from './sell-detail/sell-detail.component';
import { SellDetail2Component } from './sell-detail2/sell-detail2.component';


export const sellRouters = [

    {
        path: '',
        component: SellComponent,
        children: [
          { path: 'detail', component: SellDetailComponent },
          { path: 'detail2', component: SellDetail2Component }
        ]
    }
];