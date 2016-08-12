import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  inputs: ['onSubmitNewMeal'],
  template: `
    <div class='meal-form'>
      <h3>New Meal</h3>
      <input placeholder="Name" class="form-control" #newName/>
      <input placeholder="Details" class="form-control" #newDetails/>
      <input placeholder="Calories" class="form-control" type="number" #newCalories/>
      <button (click)="addMeal(newName, newDetails, newCalories)" class="add-button">Add New Meal</button>
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
