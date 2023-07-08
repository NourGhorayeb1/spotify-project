import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowsingArtistsComponent } from './browsing-artists.component';

describe('BrowsingArtistsComponent', () => {
  let component: BrowsingArtistsComponent;
  let fixture: ComponentFixture<BrowsingArtistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowsingArtistsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrowsingArtistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
