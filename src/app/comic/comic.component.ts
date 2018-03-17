import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.sass']
})
export class ComicComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(this.comic);
  }

  @Input() comic: Object;

  comicImage(): string {
    let image = this.comic['images'][0];

    if (image) {
      let path = image['path'];
      let extension = image['extension'];
      let size = 'portrait_incredible';

      return `${path}/${size}.${extension}`;
    }
  }

  formatDate(date: string): moment.Moment {
    return moment(date.toString()).format('MMMM DD, YYYY');
  }
}
