import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvchannelsListComponent } from './tvchannels-list.component';

describe('TvchannelsListComponent', () => {
  let component: TvchannelsListComponent;
  let fixture: ComponentFixture<TvchannelsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TvchannelsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TvchannelsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
