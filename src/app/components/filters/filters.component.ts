import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FiltersService } from '../../services/filters.service';
import { CommonModule } from '@angular/common';
import { RandomService } from '../../services/random.service';
import { ButtonComponent, TextComponent } from '@fundamental-ngx/core';
import { RandomRecipeComponent } from '../random-recipe/random-recipe.component';
import { MultiInputComponent } from '@fundamental-ngx/core/multi-input';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    ButtonComponent,
    TextComponent,
    RandomRecipeComponent,
    MultiInputComponent,
  ],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss',
})
export class FiltersComponent {
  public defaultIngredients = [
    'egg',
    'riz',
    'pasta',
    'vegetables',
    'cheese',
    'meat',
    'milk',
    'sugar',
    'tomato',
    'spices',
    'chicken',
    'beef',
    'potato',
    'bean',
    'melon',
    'apple',
    'strawberry',
    'pear',
    'raspberry',
    'cherry',
    'pineapple',
    'peppers',
    'zucchini',
    'cucumber',
    'banana',
    'clementine',
    'flour',
    'butter',
    'chocolate',
    'garlic',
    'onion',
    'carrot',
    'celery',
    'lettuce',
    'spinach',
    'mushroom',
    'lemon',
    'orange',
    'grapes',
    'peach',
    'plum',
    'corn',
    'broccoli',
    'cauliflower',
    'pumpkin',
    'olive',
    'honey',
    'yogurt',
    'bread',
    'rice',
    'oats',
    'pork',
    'fish',
    'shrimp',
    'tofu',
    'almond',
    'walnut',
    'peanut',
    'coconut',
  ];

  public userChoice: string[] = [];
  public selectedValue: string = '';
  public numberRecipes: number = 0;
  public recipe: any;

  constructor(
    private filtersService: FiltersService,
    private randomService: RandomService
  ) {
    this.getNumberRecipes();
  }

  private async getNumberRecipes() {
    this.numberRecipes = await this.filtersService.getNumberOfRecipe(
      this.userChoice
    );
  }

  public async onOptionSelected() {
    if (!this.selectedValue) {
      return;
    }
    if (this.userChoice.includes(this.selectedValue)) {
      return;
    } else {
      this.userChoice.push(this.selectedValue);
      this.numberRecipes = await this.filtersService.getNumberOfRecipe(
        this.userChoice
      );
      return;
    }
  }

  public async removeOptionSelected(item: string) {
    this.userChoice = this.userChoice.filter((choice) => choice != item);
    this.numberRecipes = await this.filtersService.getNumberOfRecipe(
      this.userChoice
    );
    return this.userChoice;
  }
}
