import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { EventEmitter } from 'stream';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() public recipe!: Recipe;

  @Output() public recipeSelected = new EventEmitter();

  onSelected(){
    this.recipeSelected.emit();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
