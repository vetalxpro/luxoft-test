import {
  AfterContentInit,
  Component,
  ContentChildren,
  Input,
  OnInit,
  QueryList,
  TemplateRef,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { DatatableComponent } from '../datatable/datatable.component';
import { ITableColumn } from '../../shared/models/table-column.model';
import { TemplateDirective } from '../../../../shared/directives/template.directive';
import { ITabelSort } from '../../shared/models/table-sort.model';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: [ './column.component.scss' ],
  encapsulation: ViewEncapsulation.None
})
export class ColumnComponent implements OnInit, AfterContentInit {
  @ContentChildren(TemplateDirective) templates: QueryList<TemplateDirective>;
  @ViewChild('cellTemplate') cellTemplate: TemplateRef<any>;
  @ViewChild('cellHeaderTemplate') cellHeaderTemplate: TemplateRef<any>;

  @Input()
  set column( column: ITableColumn ) {
    this.field = column.field;
    this.label = column.label;
    this.sortable = column.sortable;
  }

  field: string;
  label: string;
  sortable: boolean;

  constructor( private datatable: DatatableComponent ) {
  }

  ngOnInit() {
    this.datatable.addColumn(this);
  }

  ngAfterContentInit() {
    this.templates.forEach(( item ) => {
      switch ( item.getName() ) {
        case 'cell':
          this.cellTemplate = item.template;
          break;
        case 'cellHeader':
          this.cellHeaderTemplate = item.template;
          break;
      }
    });
  }

  sortIconClass( field: string, sort: ITabelSort ): object {
    return {
      'fa-sort': field !== sort.field,
      'fa-sort-up': field === sort.field && sort.order === true,
      'fa-sort-down': field === sort.field && sort.order === false
    };
  }

}
