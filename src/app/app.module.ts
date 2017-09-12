import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AppComponent } from './app.component';
import { SellComponent } from './sell/sell.component';
import { BuyComponent } from './buy/buy.component';

import { RouterModule } from '@angular/router';
import { appRouters } from './app.routers';
import { HomeComponent } from './home/home.component';
import { SpinComponent } from './FunctionalComponent/spin/spin.component';

@NgModule({
  declarations: [
    AppComponent,
    BuyComponent,
    SellComponent,
    HomeComponent,
    SpinComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(),
    RouterModule.forRoot(appRouters)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
