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
    this.addImageSrc();
    this.addDescription();
  }

  @Input() comic: Object;
  description: string;
  imageSrc: string;

  buildImageSrc(): string {
    let image = this.comic['images'][0];

    let path = image['path'];
    let extension = image['extension'];
    let size = 'portrait_incredible';

    return `${path}/${size}.${extension}`;
  }

  formatDate(date: string): string {
    date = date.replace(/^-/, '');
    return moment(date.toString()).format('MMMM DD, YYYY');
  }

  addDescription(): void {
    let loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae alias quaerat dolores facilis autem totam sit, harum, possimus enim saepe commodi ea animi eligendi magni. Deserunt, deleniti, labore nihil provident facilis aspernatur accusantium voluptatem? Labore ad tempore, molestias quia officia sapiente tenetur provident velit asperiores.';

    this.description = this.comic['description'] || loremIpsum;
  }

  addImageSrc(): void {
    if (this.comic['images'].length === 0) {
      this.imageSrc = '../../assets/images/iron-man.png';
      return;
    }

    this.imageSrc = this.buildImageSrc();
  }
}
