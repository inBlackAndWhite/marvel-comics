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

  comicsList: HTMLElement = this.element.nativeElement;
  initialHeight: number = this.comicsList.offsetHeight;
  insertionRate: number = 1;
  comicHeight: number = this.initialHeight * this.insertionRate;
  comics: Array<Object> = [];

  ngOnInit() {
    this.loaderService.loadComics()
                      .then(() => this.addComics());
  }

  addComics(height?: number): void {
    let scroll = this.comicsList.scrollTop;
    let listHeight = height || this.comicsList.offsetHeight;
    let comicsCount = Math.floor((listHeight + scroll) / this.comicHeight);

    this.comics = this.loaderService.comics.slice(0, comicsCount);
  }

  @HostListener('scroll', ['$event'])
  onScroll(event): void {
    let listHeight = this.comicsList.offsetHeight;
    let newHeight = listHeight + this.comicHeight;

    this.addComics(newHeight);
  }

}
