import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(valueOne: number, valueTwo: number): number {



    return valueOne-valueTwo;
  }

}
