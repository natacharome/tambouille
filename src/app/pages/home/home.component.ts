import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HeaderComponent } from '../../core/layout/header/header.component';
import { SearchComponent } from '../../shared/components/search/search.component';
import { SeasonCardComponent } from '../../shared/components/season-card/season-card.component';
import { TitleComponent } from '../../shared/components/title/title.component';
import { RecipeCardComponent } from '../../shared/components/recipe-card/recipe-card.component';
import { RecipeService } from './services/recipe.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    HeaderComponent,
    SearchComponent,
    SeasonCardComponent,
    TitleComponent,
    RecipeCardComponent,
    CommonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  recipeService = inject(RecipeService);
  recipes$ = this.recipeService.getRecipes();
}
