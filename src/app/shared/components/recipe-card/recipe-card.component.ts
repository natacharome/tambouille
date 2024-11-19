import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-card',
  standalone: true,
  imports: [],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.scss',
})
export class RecipeCardComponent {
  @Input() id = '';
  @Input() recipeImage = '';
  @Input() recipeTitle = '';
  @Input() time = '';

  router = inject(Router);

  navigateToRecipe(id: string) {
    console.log(id);
    this.router.navigate(['/recipe', id]);
  }
}
