import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Top250moviesComponent } from './top250movies.component';

describe('Top250moviesComponent', () => {
  let component: Top250moviesComponent;
  let fixture: ComponentFixture<Top250moviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Top250moviesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Top250moviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
