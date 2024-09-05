import { Component, Input, OnChanges } from '@angular/core';
import { RandomService } from '../../services/random.service';
import { FiltersService } from '../../services/filters.service';
import { NgFor, NgIf } from '@angular/common';
import { CardModule } from '@fundamental-ngx/core/card';
import {
  AvatarComponent,
  ButtonComponent,
  TextComponent,
} from '@fundamental-ngx/core';

@Component({
  selector: 'app-random-recipe',
  standalone: true,
  templateUrl: './random-recipe.component.html',
  styleUrls: ['./random-recipe.component.scss'],
  providers: [RandomService],
  imports: [
    NgFor,
    NgIf,
    AvatarComponent,
    CardModule,
    ButtonComponent,
    TextComponent,
  ],
})
export class RandomRecipeComponent implements OnChanges {
  @Input() filters: string[] = [];
  public recipe: any;

  constructor(private randomService: RandomService) {}

  ngOnChanges() {
    this.loadRecipe();
  }

  async loadRecipe() {
    try {
      const res = await this.randomService.getRandomRecipe(this.filters);
      this.recipe = res.data?.recipes[0];
    } catch (error) {
      console.error('Erreur lors du chargement de la recette :', error);
    }
  }
}
