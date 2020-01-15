import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatCheckboxModule, MatIconModule, MatInputModule,
  MatDatepickerModule, MatNativeDateModule, MatSidenavModule, MatToolbarModule,
  MatListModule, MatTabsModule, MatCardModule, MatSelectModule, MatProgressSpinnerModule, MatDialogModule
} from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatIconModule, MatFormFieldModule, MatInputModule,
    MatDatepickerModule, MatNativeDateModule, MatSidenavModule, MatSidenavModule, MatToolbarModule,
    MatListModule, MatTabsModule, MatCardModule, MatSelectModule, MatProgressSpinnerModule, MatDialogModule],
  exports: [MatButtonModule, MatCheckboxModule, MatIconModule, MatFormFieldModule, MatInputModule,
    MatDatepickerModule, MatNativeDateModule, MatSidenavModule, MatSidenavModule, MatToolbarModule,
    MatListModule, MatTabsModule, MatCardModule, MatSelectModule, MatProgressSpinnerModule, MatDialogModule]
})
export class MaterialModule { }
