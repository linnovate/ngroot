import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SearchRequestComponent } from './search-request/search-request.component';
import { RequestDetailsComponent } from './request-details/request-details.component';

import { RequestsService } from './_services/requests.service'

@NgModule({
  declarations: [
    AppComponent,
    SearchRequestComponent,
    RequestDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    RequestsService
  ],
  bootstrap: [AppComponent, SearchRequestComponent, RequestDetailsComponent]
})
export class AppModule { }
