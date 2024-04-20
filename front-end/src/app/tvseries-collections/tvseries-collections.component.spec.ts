import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvseriesCollectionsComponent } from './tvseries-collections.component';

describe('TvseriesCollectionsComponent', () => {
  let component: TvseriesCollectionsComponent;
  let fixture: ComponentFixture<TvseriesCollectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TvseriesCollectionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TvseriesCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
