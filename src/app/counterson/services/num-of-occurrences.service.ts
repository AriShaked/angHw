import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumOfOccurrencesService {
  occurrences: object;

  constructor() { }

  countOccurrences(valOf: string) {
      let freq = {};
      for (let i=0; i<valOf.length;i++) {
          let character = valOf.charAt(i);
          if (freq[character]) {
             freq[character]++;
          } else {
             freq[character] = 1;
          }
      }

      this.occurrences =  freq;
      return this.occurrences;
  }

}



  






