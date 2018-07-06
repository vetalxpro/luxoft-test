import { Pipe, PipeTransform } from '@angular/core';
import { ITableFilter } from '../shared/models/table-filter.model';

@Pipe({
  name: 'tableFilter'
})
export class TableFilterPipe implements PipeTransform {

  transform( data: any[], filter: ITableFilter ): any[] {
    const { query, field } = filter;
    if ( !query || !field ) {
      return data;
    }
    return data.filter(( item: string ) => {
      if ( field === 'all' ) {
        const matchedFields = Object.values(item).filter(( _item ) => {
          return _item.toString().toLowerCase().indexOf(query) > -1;
        });
        return matchedFields.length > 0;
      }
      if ( !item[ field ] ) {
        return false;
      }
      return item[ field ].toString().toLowerCase().indexOf(query.toLowerCase()) > -1;
    });
  }
}
