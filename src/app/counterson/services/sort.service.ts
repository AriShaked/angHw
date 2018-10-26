import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SortService {
  arrToObj: object;
  
  constructor() { }

  sortForMe(obj: object) {

    let sortable = [];
    for (let occurences in obj) {
      sortable.push([occurences, obj[occurences]]);
    }
    sortable.sort(function (a, b) {
      return b[1] - a[1];
    });
     return sortable;
  }
}


