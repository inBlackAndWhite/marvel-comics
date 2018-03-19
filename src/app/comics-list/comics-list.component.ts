import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-comics-list',
  templateUrl: './comics-list.component.html',
  styleUrls: ['./comics-list.component.sass']
})
export class ComicsListComponent implements OnInit {

  constructor(private loaderService: LoaderService,
              private element: ElementRef) { }

  element: number = this.element.nativeElement;
  initialHeight: number = this.element.offsetHeight;
  comicHeight: number = this.initialHeight * 0.8;
  comics: Array<Object> = [];

  ngOnInit() {
    this.loaderService.loadComics()
                      .then(() => this.placeComics());
  }

  placeComics(height?: number): void {
    let scroll = this.element.scrollTop;
    let listHeight = height || this.element.offsetHeight;
    let comicsCount = Math.floor((listHeight + scroll) / this.comicHeight);

    comicsCount = comicsCount < 2 ? 2 : comicsCount;
    this.comics = this.loaderService.comics.slice(0, comicsCount);
  }

  @HostListener('scroll', ['$event'])
  onScroll(event): void {
    let listHeight = this.element.offsetHeight;
    let newHeight = listHeight + this.comicHeight;

    this.placeComics(newHeight);
  }

}
