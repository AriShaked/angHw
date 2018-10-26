import { NumOfNotesService } from './../services/num-of-notes.service';
import { NumOfOccurrencesService } from './../services/num-of-occurrences.service';
import { SortService } from './../services/sort.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  textAreaVal: string;
  numberOfNotes: number;
  numberOfWords:number;
  numOfOccurrencesObj: object;
  numOfOccurrences: string;
  sortedObj: object;
  sorted: string;


  constructor(private numOfNotesService: NumOfNotesService, private numOfOccurrencesService: NumOfOccurrencesService,
    private sortService: SortService) {

  }

  ngOnInit() {

  }

  putinValComeToDaddy(val: string) {
    this.textAreaVal = val;
    console.log(this.textAreaVal);

    this.numberOfNotes = this.numOfNotesService.countNotes(this.textAreaVal);
    this.numberOfWords = this.numOfNotesService.countWords(this.textAreaVal);
    this.numOfOccurrencesObj = this.numOfOccurrencesService.countOccurrences(this.textAreaVal);
    this.numOfOccurrences = JSON.stringify(this.numOfOccurrencesObj);

    if (this.numOfOccurrencesObj) {

       this.sortedObj = this.sortService.sortForMe(this.numOfOccurrencesObj);
       this.sorted = JSON.stringify(this.sortedObj);

    } else {
      console.log("not yet")
    }

  }





}
