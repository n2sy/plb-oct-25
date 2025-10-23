import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { FormsModule } from '@angular/forms';
import { SecondComponent } from './second/second.component';
import { CvComponent } from './cv/cv.component';
import { ListeComponent } from './liste/liste.component';
import { ItemComponent } from './item/item.component';
import { DetailsComponent } from './details/details.component';
import { AddAccountComponent } from './accounts/add-account/add-account.component';
import { ItemAccountComponent } from './accounts/item-account/item-account.component';
import { HomeAccountComponent } from './accounts/home-account/home-account.component';
import { DirectComponent } from './direct/direct.component';
import { ManageServersComponent } from './manage-servers/manage-servers.component';
import { ShortPipe } from './pipes/short.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { FirstService } from './services/first.service';
import { SecondService } from './services/second.service';
import { RecruterComponent } from './recruter/recruter.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    CvComponent,
    ListeComponent,
    ItemComponent,
    DetailsComponent,
    AddAccountComponent,
    ItemAccountComponent,
    HomeAccountComponent,
    DirectComponent,
    ManageServersComponent,
    ShortPipe,
    FilterPipe,
    RecruterComponent,
  ], // Composant, directive, pipe doit etre déclaré obligatoirement dans un module
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  //providers: [],
  providers: [FirstService, SecondService],
  bootstrap: [AppComponent],
})
export class AppModule {}
