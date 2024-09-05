import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RandomRecipeComponent } from './components/random-recipe/random-recipe.component';
import { FiltersComponent } from './components/filters/filters.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RandomRecipeComponent, FiltersComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'spoon-recipe';
}
