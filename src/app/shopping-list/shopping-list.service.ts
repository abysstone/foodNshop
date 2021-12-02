import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{

    private ingredients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Orange', 6)
      ];

      getIngredients(){
          return this.ingredients.slice();
      }
      
}