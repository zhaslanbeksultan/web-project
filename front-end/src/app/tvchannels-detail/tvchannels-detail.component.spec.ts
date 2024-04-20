import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvchannelsDetailComponent } from './tvchannels-detail.component';

describe('TvchannelsDetailComponent', () => {
  let component: TvchannelsDetailComponent;
  let fixture: ComponentFixture<TvchannelsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TvchannelsDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TvchannelsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
