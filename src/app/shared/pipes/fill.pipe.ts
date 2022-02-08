import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appFill',
})
export class FillPipe implements PipeTransform {
  transform(amount: number): number[] {
    return new Array(amount).fill(1);
  }
}
