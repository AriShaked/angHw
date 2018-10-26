import { NumOfNotesService } from './services/num-of-notes.service';
import { NumOfOccurrencesService } from './services/num-of-occurrences.service';
import { SortService } from './services/sort.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { MainComponent } from './main/main.component';
import { FormComponent } from './main/form/form.component';
import { ResultComponent } from './main/result/result.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule

  ],
  providers:[NumOfNotesService, NumOfOccurrencesService , SortService],
  declarations: [MainComponent, FormComponent, ResultComponent],
  exports: [MainComponent]
})
export class CountersonModule { }
