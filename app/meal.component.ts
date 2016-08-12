import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
    <div class="meal">
      <h3>Name: <span class="h3-display">{{ meal.name }}</span></h3>
      <h4>Description: <span class="h4-display">{{ meal.details }}</span></h4>
      <h5>Calories: <span class="h5-display">{{ meal.calories }}</span></h5>
    </div>
  `
})

export class MealComponent {
  public meal: Meal;
}
