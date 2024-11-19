import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RecipeComponent } from './pages/recipe/recipe.component';
import { BooksComponent } from './pages/books/books.component';
import { PlacesComponent } from './pages/places/places.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'recipe/:id', component: RecipeComponent },
  { path: 'books', component: BooksComponent },
  { path: 'places', component: PlacesComponent },
];
