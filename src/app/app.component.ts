import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/layout/header/header.component';
import { SearchComponent } from './shared/components/search/search.component';
import { SeasonCardComponent } from './shared/components/season-card/season-card.component';
import { TitleComponent } from './shared/components/title/title.component';
import { RecipeCardComponent } from "./shared/components/recipe-card/recipe-card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    SearchComponent,
    SeasonCardComponent,
    TitleComponent,
    RecipeCardComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'tambouille';
}
