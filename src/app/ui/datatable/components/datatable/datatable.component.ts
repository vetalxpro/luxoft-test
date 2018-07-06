import { Component, Input, OnInit } from '@angular/core';
import { ColumnComponent } from '../column/column.component';
import { ITabelSort } from '../../shared/models/table-sort.model';
import { ITableFilter } from '../../shared/models/table-filter.model';
import { ITableColumn } from '../../shared/models/table-column.model';


@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: [ './datatable.component.scss' ]
})
export class DatatableComponent implements OnInit {
  @Input() data: any[];
  columns: ColumnComponent[] = [];
  filter: ITableFilter = {
    field: '',
    query: ''
  };
  sort: ITabelSort = {
    order: true,
    field: ''
  };

  constructor() {
  }

  ngOnInit() {
  }

  addColumn( column: ColumnComponent ) {
    this.columns.push(column);
  }

  onFilterKeyup( event ) {
    const query = event.target.value;
    this.filter = { ...this.filter, query };
  }

  onFilterFieldSelect( event ) {
    const field = event.target.value;
    this.filter = { ...this.filter, field };
  }

  onSortClick( column: ITableColumn ) {
    if ( !column.sortable ) {
      return;
    }
    const { field } = column;
    this.sort = {
      ...this.sort,
      field,
      order: this.sort.field === field ? !this.sort.order : false
    };
  }
}
