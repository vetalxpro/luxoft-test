import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'webLink'
})
export class WebLinkPipe implements PipeTransform {

  transform( value: string ): string {
    if ( !value ) {
      return value;
    }
    return `http://${value}`;
  }

}
