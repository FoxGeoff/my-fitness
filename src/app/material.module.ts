import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatIconModule, MatInputModule,
  MatDatepickerModule, MatNativeDateModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatIconModule, MatFormFieldModule, MatInputModule,
    MatDatepickerModule, MatNativeDateModule, MatSidenavModule, MatSidenavModule, MatToolbarModule],
  exports: [MatButtonModule, MatCheckboxModule, MatIconModule, MatFormFieldModule, MatInputModule,
    MatDatepickerModule, MatNativeDateModule, MatSidenavModule, MatSidenavModule, MatToolbarModule]
})
export class MaterialModule { }
