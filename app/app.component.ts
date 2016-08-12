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

  mealWasSelected(clickedMeal: Meal): void {
    console.log("parent", clickedMeal);
  }
}
