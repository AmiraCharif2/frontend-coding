import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule} from '@angular/material/form-field'
import { MatSelectModule } from '@angular/material/select'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatSortModule } from '@angular/material/sort'
import { MatTableModule } from '@angular/material/table'
const materialComponent =[
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule ,
  MatPaginatorModule,
  MatSortModule,
  MatTableModule


]

@NgModule({
  
  imports: [
   materialComponent,
   
  ],
  exports: [
    materialComponent
  ]
})
export class MaterialModule { }
