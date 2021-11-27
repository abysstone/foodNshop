import { Component, EventEmitter, OnInit, Output } from '@angular/core';
// import { EventEmitter } from 'stream';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes : Recipe[] = [
    new Recipe('Test recipe', 'very Tasty Recipe', 'https://p1.pxfuel.com/preview/843/619/707/borsch-food-cook-at-home-a-simple-recipe-simple-and-delicious-soup.jpg'),
    new Recipe('Test2 recipe', 'very2 Tasty Recipe', 'https://p1.pxfuel.com/preview/843/619/707/borsch-food-cook-at-home-a-simple-recipe-simple-and-delicious-soup.jpg')
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  
  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

  constructor() { }

  ngOnInit(): void {
  }

}