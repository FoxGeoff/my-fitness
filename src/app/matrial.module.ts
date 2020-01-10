import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckbox } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckbox],
  exports: [MatButtonModule, MatCheckbox]
})
export class MatrialModule { }
