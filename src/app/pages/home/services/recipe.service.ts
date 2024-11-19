import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Recipe } from '../../../shared/models/recipe';
import { veganRecipeMock } from '../../../shared/mocks/recipe.mock';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor() {}

  getRecipes(): Observable<Recipe[]> {
    return of(veganRecipeMock);
  }
}
