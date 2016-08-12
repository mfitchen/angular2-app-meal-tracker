import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal.component';
import { Meal } from './meal.model';
import { EditMealDetailsComponent } from './edit-meal-details.component';
import { NewMealComponent} from './new-meal.component';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  directives: [MealComponent, EditMealDetailsComponent, NewMealComponent],
  template: `
    <select (change)="onCaloriesChange($event.target.value)">
      <option value="all" selected="selected">SHOW ALL MEALS</option>
      <option value="under500">SHOW MEALS < 500 CALORIES</option>
      <option value="over500">SHOW MEALS > 500 CALORIES</option>
    </select>
    <meal-display *ngFor="#currentMeal of mealList | calories:filterCalories"
      (click)="mealClicked(currentMeal)"
      [class.selected]='currentMeal === selectedMeal'
      [meal]='currentMeal'>
    </meal-display>
    <div>
      <edit-meal-details *ngIf= "selectedMeal" [meal]="selectedMeal"></edit-meal-details>
    </div>
    <div>
      <new-meal (onSubmitNewMeal)="createMeal($event)"></new-meal>
    </div>
  `
})

export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  public filterCalories: string = "all";

  constructor() {
    this.onMealSelect = new EventEmitter();
  }

  mealClicked(clickedMeal: Meal): void {
    console.log('child', clickedMeal);
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }

  createMeal(newMeal: string[]): void {
      console.log(newMeal[0], newMeal[1], newMeal[2], this.mealList.length);
    this.mealList.push(
      new Meal(newMeal[0], newMeal[1], parseInt(newMeal[2]), this.mealList.length)
    );
  }

  onCaloriesChange(filterOption) {
    this.filterCalories = filterOption;
  }

}
