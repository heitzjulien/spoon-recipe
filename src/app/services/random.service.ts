import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class RandomService {
  private apiUrl = 'https://api.spoonacular.com/recipes/random';
  private token = ''

  constructor() { }

  async getRandomRecipe() {
    try {
      const response = await axios.get(this.apiUrl, {
        headers: {
          'x-api-key': `${this.token}`
        }
      });
      return response.data.recipes
    } catch (error) {
      console.error('Error fetching agents', error);
      throw error;
    }
  }
}



