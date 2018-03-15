import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-comics-list',
  templateUrl: './comics-list.component.html',
  styleUrls: ['./comics-list.component.sass']
})
export class ComicsListComponent implements OnInit {

  constructor(private loaderService: LoaderService) { }

  ngOnInit() {
    this.loaderService.loadComics();
  }

}
