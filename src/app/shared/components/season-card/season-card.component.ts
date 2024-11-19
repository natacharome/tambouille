import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Season } from '../../enums/seasons.enum';
import { Month } from '../../enums/months.enum';

@Component({
  selector: 'app-season-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './season-card.component.html',
  styleUrl: './season-card.component.scss',
})
export class SeasonCardComponent implements OnInit {
  currentSeason: Season = {} as Season;
  seasons: Record<Season, Month[]> = {
    [Season.SPRING]: [Month.MARCH, Month.APRIL, Month.MAY],
    [Season.SUMMER]: [Month.JUNE, Month.JULY, Month.AUGUST],
    [Season.AUTUMN]: [Month.SEPTEMBER, Month.OCTOBER, Month.NOVEMBER],
    [Season.WINTER]: [Month.DECEMBER, Month.JANUARY, Month.FEBRUARY],
  };
  ngOnInit() {
    this.currentSeason = this.getCurrentSeason();
  }
  getCurrentSeason(): Season {
    const currentMonth = new Date().getMonth();
    return (
      (Object.entries(this.seasons).find(([_, months]) =>
        months.includes(currentMonth)
      )?.[0] as Season) || Season.WINTER
    );
  }
}
