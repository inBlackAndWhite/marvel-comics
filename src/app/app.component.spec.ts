import { TestBed, async, inject } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { ComicsListComponent } from './comics-list/comics-list.component';
import { ComicComponent } from './comic/comic.component';
import { ComicDetailComponent } from './comic-detail/comic-detail.component';
import { LoaderService } from './services/loader.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ComicsListComponent,
        ComicComponent,
        ComicDetailComponent
      ],
      providers: [LoaderService]
    }).compileComponents();
  }));

  it('should create the app', async(inject([LoaderService], (loaderService: LoaderService) => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    expect(app).toBeTruthy();
  })));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('h1').textContent).toContain('Iron Man');
  }));

  it('should render app-comics-list component', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('app-comics-list')).toBeTruthy();
  }));
});
