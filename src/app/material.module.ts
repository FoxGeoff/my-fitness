import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckbox, MatCheckboxModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule],
  exports: [MatButtonModule, MatCheckboxModule]
})
export class MaterialModule { }
