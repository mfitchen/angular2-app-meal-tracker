import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { MealListComponent } from './meal-list.component';

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
    <div class="wrap">
      <div class="nav-header">
        <div class="nav-header-title">
          <h1 class="title">meal tracker</h1>
        </div>
        <div class="nav-header-angular2">
          <div class="nav-header-angular2-logo">
            <img class="angular2-logo" src="https://camo.githubusercontent.com/07cdd0c91fc537ecb88c95d77c7d9f3b7d171ad6/687474703a2f2f692e696d6775722e636f6d2f353058624d4e522e706e67" alt="Angular2 Logo">
          </div>
          <div class="nav-header-angular2-app">
            <h6 class="angular2-app">APP</h6>
          </div>
        </div>
      </div>
      <div class="meals-info">
        <meal-list
          [mealList]="meals"
          (onMealSelect)="mealWasSelected($event)">
        </meal-list>
      </div>
      
    </div>
  `
})

export class AppComponent {
  public meals: Meal[] = [];
  constructor(){
    this.meals = [
      new Meal("Stir Fry", "Chicken stir fry with broccoli, carrots, bamboo shoots, and brown rice", 350, 0),
      new Meal("Pizza", "Pepperoni and cheese pizza", 550, 1),
      new Meal("Salad", "Spinach salad with pine nuts, scallions, carrots, avocado, and lemon juice", 300, 2),
    ];
  }

  mealWasSelected(clickedMeal: Meal): void {
    console.log("parent", clickedMeal);
  }
}
