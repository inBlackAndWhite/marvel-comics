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

  ngOnInit() {
    this.loaderService.loadComics()
                      .then(() => this.placeComics());
  }

  comics: Array<Object> = [];

  placeComics(a?: number): void {
    let scroll = this.element.nativeElement.scrollTop;
    let listHeight = a || this.element.nativeElement.offsetHeight;
    let comicHeight = 365;
    let comicsCount = Math.floor((listHeight + scroll)/ comicHeight);

    this.comics = this.loaderService.comics.slice(0, comicsCount + 1);
  }

  @HostListener('scroll', ['$event'])
  onScroll(event): void {
    let h = this.element.nativeElement.offsetHeight
    let b = h + h * 0.8;
    this.placeComics(b);
    console.log('been here');
  }

}
