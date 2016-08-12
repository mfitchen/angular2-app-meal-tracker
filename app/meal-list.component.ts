import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal.component';
import { Meal } from './meal.model';
import { EditMealDetailsComponent } from './edit-meal-details.component';
import { NewMealComponent} from './new-meal.component';
import { CaloriesPipe } from './calories.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  pipes: [CaloriesPipe],
  directives: [MealComponent, EditMealDetailsComponent, NewMealComponent],
  template: `
    <h3>Filter</h3>
    <select (change)="onCaloriesChange($event.target.value)" class="filter form-control">
      <option value="all" selected="selected">SHOW ALL MEALS</option>
      <option value="under500">SHOW MEALS < 500 CALORIES</option>
      <option value="over500">SHOW MEALS > 500 CALORIES</option>
    </select>
    <div>
      <meal-display *ngFor="#currentMeal of mealList | calories:filterCalories"
        (click)="mealClicked(currentMeal)"
        [class.selected]="currentMeal === selectedMeal"
        [meal]="currentMeal">
      </meal-display>
    </div>
    <div>
      <edit-meal-details *ngIf="selectedMeal" [meal]="selectedMeal"></edit-meal-details>
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
