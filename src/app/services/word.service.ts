import { Injectable } from '@angular/core';
import { Word } from '../word';

@Injectable()
//     {
//   providedIn: 'root',
// }
export class WordService {
  url = 'http://localhost:3000/words';

  /**
   *
   */
  async getAllWrods(): Promise<Word[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }
  /**
   *
   * @param id
   */
  async getWordById(id: number){
    const word = await fetch(`${this.url}/${id}`);
    return (await word.json()) ?? [];
  }
  /**
   *
   * @param fio
   * @param comment
   */
  sendData(fio: string, comment: string) {
    alert(`${fio}: ${comment}`);
  }
}
