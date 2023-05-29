import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { WordService } from 'src/app/services/word.service';
import { Word } from 'src/app/word';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  /**
   *
   */
  word?: Word;

  /**
   *
   */
  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    comment: new FormControl(''),
  });

  /**
   *
   * @param route
   * @param wordService
   */
  constructor(private route: ActivatedRoute, private wordService: WordService) {
    const wordId:string = this.route.snapshot.params['id'];
     this.wordService.getWordById(+wordId).then((word)=>{
       this.word = word
    });
  }
  /**
   *
   */
  send() {
    this.wordService.sendData(this.form.value.name, this.form.value.comment)
  }
} 
