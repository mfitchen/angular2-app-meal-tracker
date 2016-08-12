import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal-details',
  inputs: ['meal'],
  template: `
    <div class="edit-details">
      <h3>Edit Details {{ meal.name }}:</h3>
      <input [(ngModel)]="meal.name" class="input-edit-details"/>
      <input [(ngModel)]="meal.details" class="input-edit-details"/>
      <input [(ngModel)]="meal.calories" class="input-edit-details"/>
    </div>
  `
})

export class EditMealDetailsComponent {
  public meal: Meal;
}
