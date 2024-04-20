import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryFilmsComponent } from './country-films.component';

describe('CountryFilmsComponent', () => {
  let component: CountryFilmsComponent;
  let fixture: ComponentFixture<CountryFilmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryFilmsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CountryFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
