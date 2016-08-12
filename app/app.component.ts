import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { MealListComponent } from './meal-list.component';

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
    <div class="wrap">
      <h1>MFitchen | Meal Tracker [ angular2 app ]</h1>
      <meal-list
        [mealList]="meals"
        (onMealSelect)="mealWasSelected($event)">
      </meal-list>
    </div>
  `
})

export class AppComponent {
  public meals: Meal[] = [];
  constructor(){
    this.meals = [
      new Meal("Stir Fry", "Chicken stir fry with broccoli, carrots, bamboo shoots, and brown rice", 350, 0),
      new Meal("Pizza", "Pepperoni and cheese pizza", 550, 1),
      new Meal("Salad", "Spinach salad with pine nuts, cherry tomatos, scallions, carrots, avocado, and lemon juice", 300, 2),
    ];
  }

  mealWasSelected(clickedMeal: Meal): void {
    console.log("parent", clickedMeal);
  }
}
