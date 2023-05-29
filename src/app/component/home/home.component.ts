import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { WordService } from 'src/app/services/word.service';
import { Word } from 'src/app/word';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  /**
   *
   */
  filteredWords!: Word[];
  /**
   *
   */
  words!: Word[];
  /**
   *
   * @param wordService
   */
  constructor(private wordService: WordService, private router: Router) {
    this.wordService.getAllWrods().then((words) => {
      this.words = words
      this.filteredWords = words;
    });
  }

  /**
   *
   * @param text
   */
  search(text: string) {
    this.filteredWords = this.words
      .filter((word) =>
        word.newWord.toLocaleLowerCase().includes(text.toLocaleLowerCase())
      );
  }
}
