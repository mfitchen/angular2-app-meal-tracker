import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
    <div class="wrap">
      <h1>MFitchen | Meal Tracker [ angular2 app ]</h1>
      <meal-display></meal-display>
      <new-meal></new-meal>
    </div>
  `
})

export class AppComponent {

}
