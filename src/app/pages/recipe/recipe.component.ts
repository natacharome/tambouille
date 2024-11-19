import { Component, inject, Input, OnInit } from '@angular/core';
import { Recipe } from '../../shared/models/recipe';
import { RecipeService } from '../home/services/recipe.service';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { InstructionCardComponent } from '../../shared/components/instruction-card/instruction-card.component';
import { TagComponent } from "../../shared/components/tag/tag.component";

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [CommonModule, InstructionCardComponent, TagComponent],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.scss',
})
export class RecipeComponent implements OnInit {
  recipe$!: Observable<Recipe | undefined>;
  recipeService = inject(RecipeService);
  activatedRoute = inject(ActivatedRoute);
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(id);
    this.recipe$ = this.recipeService
      .getRecipes()
      .pipe(map((recipes) => recipes.find((recipe) => recipe.id === id)));
  }

  goBack() {
    window.history.back();
  }
}
