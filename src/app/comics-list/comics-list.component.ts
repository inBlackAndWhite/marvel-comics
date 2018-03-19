import { Component, OnInit, ElementRef } from '@angular/core';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-comics-list',
  templateUrl: './comics-list.component.html',
  styleUrls: ['./comics-list.component.sass']
})
export class ComicsListComponent implements OnInit {

  constructor(private loaderService: LoaderService,
              private element: ElementRef) { }

  ngOnInit() {
    this.loaderService.loadComics()
                      .then(() => this.placeComics());

  }

  comics: Array<Object> = [];

  placeComics(): void {
    let listHeight = this.element.nativeElement.offsetHeight;
    let comicHeight = listHeight * 0.8;
    let comicsCount = Math.floor(listHeight / comicHeight);

    this.comics = this.loaderService.comics.slice(0, comicsCount);
  }

}
