import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Top250tvseriesComponent } from './top250tvseries.component';

describe('Top250tvseriesComponent', () => {
  let component: Top250tvseriesComponent;
  let fixture: ComponentFixture<Top250tvseriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Top250tvseriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Top250tvseriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
