import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  @Input() showNumOfNotes:number;
  @Input() showNumOfWords:number;
  @Input() showNumOfOccurences:string;
  @Input() showSorted:string;


  constructor() { }

  ngOnInit() {
  }

}
