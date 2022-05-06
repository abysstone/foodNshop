// import { EventEmitter } from "stream";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{

    recipeSelected= new EventEmitter<Recipe>();

    private recipes : Recipe[] = [
        new Recipe(
            'chinese recipe', 
            'very Tasty Recipe', 
            'https://p1.pxfuel.com/preview/843/619/707/borsch-food-cook-at-home-a-simple-recipe-simple-and-delicious-soup.jpg',
            [
                new Ingredient('Carrot', 10),
                new Ingredient("Raddish", 3)
            ]),
        new Recipe(
            'Bhindi recipe', 
            'bhindi ki sabzi', 
            'https://swadkechatkare.com/wp-content/uploads/2019/08/moongfali-bhindi-sabji.jpg',
            [
                new Ingredient('chow chow', 2),
                new Ingredient('mou-mou', 7)
            ]),
        new Recipe(
            'Aloo gobi', 
            'real indian delightfull food', 
            'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-aloo-gobi-horizontal-1543273035.png',
            [
                new Ingredient('potatoes', 12),
                new Ingredient('tomatoes', 3)
            ])
      ];

      constructor(private slService: ShoppingListService){}

    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(index: number){
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
}