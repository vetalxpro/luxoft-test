import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatatableComponent } from './components/datatable/datatable.component';
import { ColumnComponent } from './components/column/column.component';
import { TableFilterPipe } from './pipes/table-filter.pipe';
import { TableSortPipe } from './pipes/table-sort.pipe';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    DatatableComponent,
    ColumnComponent,
    TableFilterPipe,
    TableSortPipe
  ],
  exports: [
    DatatableComponent,
    ColumnComponent
  ]
})
export class DatatableModule {
}
