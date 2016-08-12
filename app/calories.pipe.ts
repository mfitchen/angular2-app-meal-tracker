import { Pipe, PipeTransform } from 'angular2/core';
import { Meal } from './meal.model';

@Pipe({
  name: "calories",
  pure: false
})

export class CaloriesPipe implements PipeTransform {
  transform(input: Meal[], args) {
    if(args[0] === "over500") {
      return input.filter((meal) => {
        return meal.calories > 500;
      });
    } else if (args[0] === "under500") {
      return input.filter((meal) => {
        return meal.calories <= 500;
      });
    } else {
      return input;
    }
  }
}
