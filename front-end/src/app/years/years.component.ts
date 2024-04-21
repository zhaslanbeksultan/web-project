import {Component, OnInit} from '@angular/core';
import {CommonModule, NgForOf} from "@angular/common";
import {Year} from "../models";
import {Router} from "@angular/router";
import {YearService} from "../services/year.service";

@Component({
  selector: 'app-years',
  standalone: true,
    imports: [
        CommonModule
    ],
  templateUrl: './years.component.html',
  styleUrl: './years.component.css'
})
export class YearsComponent implements OnInit{
  years: Year[] = [];

  constructor(private yearService: YearService, private router: Router) { }
  ngOnInit(): void {
    this.getYears();
  }

  getYears(): void {
    this.yearService.getYears()
      .subscribe(years => {
        this.years = years;
      });
  }

  onYearClick(yearId: number): void {
    this.router.navigate(['years', yearId, 'films']);
  }
}
