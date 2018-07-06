import { Pipe, PipeTransform } from '@angular/core';
import { ITabelSort } from '../shared/models/table-sort.model';

@Pipe({
  name: 'tableSort'
})
export class TableSortPipe implements PipeTransform {

  transform( data: any[], tableSort: ITabelSort ): any[] {
    const { field, order } = tableSort;
    if ( !field ) {
      return data;
    }
    return data.slice().sort(( a, b ) => {
      return (a[ field ] < b[ field ] ? 1 : -1) * (order ? 1 : -1);
    });
  }

}
