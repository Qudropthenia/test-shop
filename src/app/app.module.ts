import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent} from './app.component';

// PrimeNG
import { AccordionModule } from 'primeng/accordion';  // accordion and accordion tab
import { MenuItem } from 'primeng/api';               // api
// Buttons
import { ButtonModule } from 'primeng/button';
// Menu
// - TabMenu
import { TabMenuModule } from 'primeng/tabmenu';

// Components
import { ShopComponent } from './shop/shop.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	FormsModule,
    ButtonModule,
	TabMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
