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
  
    if(this.putin){
      this.disabled = false;
      console.log("button is active");
      this.putinVal.emit(this.putin);
    }else{
      this.disabled = true;
    }
      this.disabled = false;
  }

}
