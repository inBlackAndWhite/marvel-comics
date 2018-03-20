import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comic-detail',
  templateUrl: './comic-detail.component.html',
  styleUrls: ['./comic-detail.component.sass']
})
export class ComicDetailComponent implements OnInit {

  constructor() { }

  @Input() comic: Object;

  ngOnInit() {
  }

}
