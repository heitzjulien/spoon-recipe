import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class RandomService {
  private apiUrl = environment.apiUrl + 'random';
  private apiKey = environment.apiKey;

  public recipe: any;

  constructor() {}

  async getRandomRecipe(filters: string[]) {
    try {
      const response = await axios.get(this.apiUrl, {
        params: {
          'include-tags': filters ? filters.join(',') : '',
        },
        headers: {
          'x-api-key': `${this.apiKey}`,
        },
      });
      return response;
    } catch (error) {
      console.error('Error fetching agents', error);
      throw error;
    }
  }

  public getRecipe() {
    console.log(this.recipe);
    return this.recipe?.recipes[0];
  }
}
