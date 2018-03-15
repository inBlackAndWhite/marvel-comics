import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoaderService } from './services/loader.service';
import { ComicsListComponent } from './comics-list/comics-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ComicsListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [LoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
