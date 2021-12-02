import { Component, Input, OnInit } from '@angular/core';
// import { EventEmitter } from 'stream';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() public recipe!: Recipe;

  // @Output() public recipeSelected = new EventEmitter();


  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  onSelected(){
    // this.recipeSelected.emit();
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}
