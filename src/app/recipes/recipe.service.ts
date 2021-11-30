import { Recipe } from "./recipe.model";

export class RecipeService{
    private recipes : Recipe[] = [
        new Recipe('Test recipe', 'very Tasty Recipe', 'https://p1.pxfuel.com/preview/843/619/707/borsch-food-cook-at-home-a-simple-recipe-simple-and-delicious-soup.jpg'),
        new Recipe('Test2 recipe', 'very2 Tasty Recipe', 'https://p1.pxfuel.com/preview/843/619/707/borsch-food-cook-at-home-a-simple-recipe-simple-and-delicious-soup.jpg')
      ];

    getRecipes(){
        return this.recipes.slice();
    }
}