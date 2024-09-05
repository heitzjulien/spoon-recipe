import { Component } from '@angular/core';
import { RandomService } from '../../services/random.service';
import { NgFor, NgIf } from '@angular/common';
import { CardModule } from '@fundamental-ngx/core/card';
import { AvatarComponent, ButtonComponent, TextComponent } from '@fundamental-ngx/core';


@Component({
  selector: 'app-random-recipe',
  standalone: true, 
  templateUrl: './random-recipe.component.html',
  styleUrls: ['./random-recipe.component.scss'],  
  providers: [RandomService],
  imports: [NgFor, NgIf, AvatarComponent, CardModule, ButtonComponent, TextComponent]
})
export class RandomRecipeComponent {
  recipe: any

  constructor(private randomRecipeService: RandomService) {}


  async loadRecipe() {
    try {
      this.recipe = await this.randomRecipeService.getRandomRecipe();
      console.log(this.recipe);
    } catch (error) {
      console.error('Erreur lors du chargement des recettes', error);
    }
  }
}
