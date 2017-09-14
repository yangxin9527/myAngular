import { SellComponent } from './sell/sell.component';
import { BuyComponent } from './buy/buy.component';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
export const appRouters = [
    {
    path: '',
    redirectTo: 'sell',
    pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'sell',
        loadChildren: './sell/sell.module#SellModule'
    },
    // {
    //     path: 'buy',
    //     component: BuyComponent
    // }

];
