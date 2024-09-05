import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class FiltersService {
  private apiUrl = environment.apiUrl + 'complexSearch';
  private apiKey = environment.apiKey;

  constructor() {}

  async getNumberOfRecipe(ingredients: string[]): Promise<number> {
    try {
      const response = await axios.get(this.apiUrl, {
        params: {
          includeIngredients: ingredients.join(',+'),
        },
        headers: {
          'x-api-key': `${this.apiKey}`,
        },
      });
      const numberRecipe = Number(response.data.totalResults);
      return numberRecipe;
    } catch (error) {
      console.error('Error fetching agents', error);
      throw error;
    }
  }
}
