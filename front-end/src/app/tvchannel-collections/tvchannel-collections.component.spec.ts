import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvchannelCollectionsComponent } from './tvchannel-collections.component';

describe('TvchannelCollectionsComponent', () => {
  let component: TvchannelCollectionsComponent;
  let fixture: ComponentFixture<TvchannelCollectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TvchannelCollectionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TvchannelCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
