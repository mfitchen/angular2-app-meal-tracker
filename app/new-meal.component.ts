import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
    <div class="meal-form">
      <h3>New Meal</h3>
      <input placeholder="Name" class="form-input" #newName/>
      <input placeholder="Calories" class="form-input" type="number" #newCalories/>
      <input placeholder="Details" class="form-input-details" #newDetails/>
      <button (click)="addMeal(newName, newDetails, newCalories)" class="add-button">Add Meal</button>
    </div>
  `
})

export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<String[]>;
  constructor(){
    this.onSubmitNewMeal = new EventEmitter();
  }

  addMeal(newName: HTMLInputElement, newDetails: HTMLInputElement, newCalories: HTMLInputElement){
    this.onSubmitNewMeal.emit([newName.value, newDetails.value, newCalories.value]);
    newName.value = "";
    newDetails.value = "";
    newCalories.value = "";
  }
}
