import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { SmCardComponent } from './components/sm-card/sm-card.component';
import { SmPowerlineComponent } from './components/sm-powerline/sm-powerline.component';
import { SmOutputlineComponent } from './components/sm-outputline/sm-outputline.component';
import { HomepageComponent } from './components/homepage/homepage.component';

import { CommandService } from './services';
import { SmCommandListComponent } from './components/sm-command-list/sm-command-list.component';
import { SmBlockComponent } from './components/sm-block/sm-block.component';
import { CvComponent } from './components/cv/cv.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    SmCardComponent,
    SmPowerlineComponent,
    SmOutputlineComponent,
    HomepageComponent,
    SmCommandListComponent,
    SmBlockComponent,
    CvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ CommandService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
