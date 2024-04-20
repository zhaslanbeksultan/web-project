import {Component, OnInit} from '@angular/core';
import {CommonModule, NgForOf} from "@angular/common";
import {Country} from "../models";
import {ActorService} from "../services/actor.service";
import {Router} from "@angular/router";
import {CountryService} from "../services/country.service";

@Component({
  selector: 'app-countries',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.css'
})
export class CountriesComponent implements OnInit{
  countries: Country[] = [];

  constructor(private countryService: CountryService, private router: Router) { }
  ngOnInit(): void {
    this.getCountries();
  }

  getCountries(): void {
    this.countryService.getCountries()
      .subscribe(countries => {
        this.countries = countries;
      });
  }

  onActorClick(countryId: number): void {
    this.router.navigate(['countries', countryId, 'films']);
  }
}
