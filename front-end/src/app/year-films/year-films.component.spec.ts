import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearFilmsComponent } from './year-films.component';

describe('YearFilmsComponent', () => {
  let component: YearFilmsComponent;
  let fixture: ComponentFixture<YearFilmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YearFilmsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YearFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
