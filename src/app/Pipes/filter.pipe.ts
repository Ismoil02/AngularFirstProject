import { Pipe, PipeTransform } from '@angular/core';
import { Word } from '../word';

@Pipe({
  name: 'filter',
  standalone: true,
})
export class FilterPipe implements PipeTransform {
  transform(value: Word[], filterString: string) {
    filterString = filterString.toLowerCase();
    return value.filter((item) => {
    return item.newWord.toLocaleLowerCase().includes(filterString)
    });
  }
}