import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe',
})
export class PipePipe implements PipeTransform {
  // { name: "Jo", age: 2, phone: 332255 } -> pipe:['phone', 'age']:' . ' -> "332255 . 2"
  transform(
    inputObject: Record<string | number, unknown>,
    keyArray: (string | number)[],
    separator = ''
  ): string {
    return keyArray.map((key) => `${inputObject[key]}`).join(separator);
  }
}
