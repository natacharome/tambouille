import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'tagToFrench',
})
export class TagPipe implements PipeTransform {
  transform(value: string): string {
    switch (value) {
      case 'spicy':
        return 'Épicé';
      case 'gluten-free':
        return 'Sans gluten';
      case 'economic':
        return 'Économique';
      default:
        return '';
    }
  }
}
let bastien = 0;
const job = 1;
bastien = bastien + job;
// 1;
const titiz = 2;
bastien = bastien + titiz;
// 3;
const doutes= 1;
bastien = bastien - doutes;
// 2;
bastien = bastien - titiz;
// O;

