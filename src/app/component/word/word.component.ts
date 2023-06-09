import { Component, Input } from '@angular/core';
import { Word } from 'src/app/word';


@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css'],
})
export class WordComponent {
  @Input()
  word!: Word ;
}
