import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/comics/list/list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { ComicComponent } from './components/comics/comic/comic.component';
import { MyComicsComponent } from './components/comics/my-comics/my-comics.component';
import { ItensComponent } from './components/comics/list/itens/itens/itens.component';
import { MatCardModule } from '@angular/material/card';
import { MyAddressComponent } from './components/comics/my-address/my-address.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    HeaderComponent,
    ComicComponent,
    MyComicsComponent,
    ItensComponent,
    MyAddressComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
