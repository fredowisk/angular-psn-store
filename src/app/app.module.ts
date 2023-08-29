import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './components/card/card.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { CardLabelComponent } from './components/card/card-label/card-label.component';
import { CardInfoComponent } from './components/card/card-info/card-info.component';
import { MenuLogoComponent } from './components/menu-bar/menu-logo/menu-logo.component';
import { MenuItemComponent } from './components/menu-bar/menu-item/menu-item.component';
import { CardImageComponent } from './components/card/card-image/card-image.component';
import { CardPricingComponent } from './components/card/card-info/card-pricing/card-pricing.component';
import { CardContentComponent } from './components/card/card-info/card-content/card-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    MenuBarComponent,
    CardLabelComponent,
    CardInfoComponent,
    MenuLogoComponent,
    MenuItemComponent,
    CardImageComponent,
    CardPricingComponent,
    CardContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
