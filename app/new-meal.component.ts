import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  inputs: ['onSubmitNewMeal'],
  template: `
    <div class='meal-form'>
      <h3>New Meal</h3>
      <input placeholder="Name" #newName/>
      <input placeholder="Details" #newDetails/>
      <input placeholder="Calories" #newCalories/>
      <button (click)="addMeal(newName, newDetails, newCalories)" class="btn-info btn-lg add-button">Add New Meal</button>
    </div>
  `
})

export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<String[]>;
  constructor(){
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(newName: HTMLInputElement, newDetails: HTMLInputElement, newCalories: HTMLInputElement){
    var newMeal = new Meal(newName.value, newDetails.value, parseInt(newCalories.value), 0);
    this.onSubmitNewMeal.emit([newName.value, newDetails.value, newCalories.value]);
    newName.value = "";
    newDetails.value = "";
    newCalories.value = "";
  }
}
