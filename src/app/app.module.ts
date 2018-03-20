import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ComicComponent } from './comic/comic.component';
import { LoaderService } from './services/loader.service';
import { ComicsListComponent } from './comics-list/comics-list.component';
import { ComicDetailComponent } from './comic-detail/comic-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    ComicComponent,
    ComicsListComponent,
    ComicDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [LoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
