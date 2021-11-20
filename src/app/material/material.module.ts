import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Materials
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatBadgeModule} from '@angular/material/badge';
import {ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';




let materialModule= [
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSnackBarModule,
  MatToolbarModule,
  MatTableModule,
  MatBadgeModule,
  ReactiveFormsModule,
  MatRadioModule]


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[materialModule]
})
export class MaterialModule { }
