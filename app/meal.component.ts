import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
    <div class="meal">
      <div class="meal-header">
        <h4 class="meal-header-name">{{ meal.name }}</h4>
      </div>
      <h5 class="meal-details">Calories: <span class="h5-display">{{ meal.calories }}</span></h5>
      <h5 class="meal-details">Description:</h5>
      <h5 class="h5-display">{{ meal.details }}</h5>
    </div>
  `
})

export class MealComponent {
  public meal: Meal;
}
