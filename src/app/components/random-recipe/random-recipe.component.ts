import { Component, OnInit } from '@angular/core';
import { RandomService } from '../../services/random.service';
import { NgFor } from '@angular/common';
import { CardModule } from '@fundamental-ngx/core/card';
import { AvatarComponent, ButtonComponent, TextComponent } from '@fundamental-ngx/core';


@Component({
  selector: 'app-random-recipe',
  standalone: true, 
  templateUrl: './random-recipe.component.html',
  styleUrls: ['./random-recipe.component.scss'],  
  providers: [RandomService],
  imports: [NgFor, CardModule, AvatarComponent, ButtonComponent, TextComponent]
})
export class RandomRecipeComponent implements OnInit {
  recipes: any
  isDataLoaded = false;

  constructor(private randomRecipeService: RandomService) {}

  ngOnInit(): void {
    this.loadRecipe();
  }

  async loadRecipe() {
    if (this.isDataLoaded) {
      return;
    }

    try {
      this.recipes = await this.randomRecipeService.getRandomRecipe();
      console.log(this.recipes);
      this.isDataLoaded = true;
    } catch (error) {
      console.error('Erreur lors du chargement des recettes', error);
    }
  }
}
