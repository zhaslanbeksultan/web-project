import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Top250tvchannelsComponent } from './top250tvchannels.component';

describe('Top250tvchannelsComponent', () => {
  let component: Top250tvchannelsComponent;
  let fixture: ComponentFixture<Top250tvchannelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Top250tvchannelsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Top250tvchannelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
