import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal-details',
  inputs: ['meal'],
  template: `
    <div class="edit-details">
      <h3>Edit Details {{ meal.name }}:</h3>
      <input [(ngModel)]="meal.name" class="meal-form"/>
      <input [(ngModel)]="meal.details" class="meal-form"/>
      <input [(ngModel)]="meal.calories" class="meal-form"/>
    </div>
  `
})

export class EditMealDetailsComponent {
  public meal: Meal;
}
