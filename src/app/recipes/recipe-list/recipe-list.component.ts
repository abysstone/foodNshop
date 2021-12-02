import { Component, OnInit } from '@angular/core';
// import { EventEmitter } from 'stream';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes!: Recipe[];

  // @Output() recipeWasSelected = new EventEmitter<Recipe>();
  
  // onRecipeSelected(recipe: Recipe){
  //   this.recipeWasSelected.emit(recipe);
  // }

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipes= this.recipeService.getRecipes();
  }

}