import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearsComponent } from './years.component';

describe('YearsComponent', () => {
  let component: YearsComponent;
  let fixture: ComponentFixture<YearsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YearsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YearsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
