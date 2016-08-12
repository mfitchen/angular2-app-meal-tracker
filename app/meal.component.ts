import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
    <h3>Name: <span class="h3-display">{{ meal.name }}</span></h3>
    <h3>Description: <span class="h3-display">{{ meal.details }}</span></h3>
    <h4>Calories: <span class="h4-display">{{ meal.calories }}</span></h4>
  `
})

export class MealComponent {
  public meal: Meal;
}
