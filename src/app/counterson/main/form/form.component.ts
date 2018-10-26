import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() putinVal = new EventEmitter<string>();
  putin:string;
  disabled: boolean;
 
  constructor() { }

  ngOnInit() {
  }

  bubbleToDaddy(){
    this.putinVal.emit(this.putin);
  }

   buttonWakeUp(event){
     if (event){
      this.disabled = false;
      console.log("button is active");
     }
   }


}
