import { Injectable, Input, Output, EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class NumOfNotesService {

  NumberOfNotes: string;
  NumberOfWords: number;
  //newArr = [];
 

  constructor() { }

  countNotes(valOf) {
    if (valOf) {
      this.NumberOfNotes = valOf;
      return this.NumberOfNotes.length;
    } else {
      return 0;
    }
  }

  countWords(valOf){
    
    let str = valOf;
    let arr = str.split(" ");
    let newArr=[];
   
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      if(element){
        newArr.push(element);
      }
    }
     this.NumberOfWords = newArr.length;
     console.log(this.NumberOfWords);
     return this.NumberOfWords;
  }
  
}