import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs';

@Pipe({
  name: 'rideFilter'
})
export class RideFilterPipe implements PipeTransform {

  filteredArray!:any[];

  transform(value: any[], args?: string): any[] {
    const place = 'Office';
    switch (args) {
        case 'To Office':
            this.filteredArray = value.filter(item => item.end === place);
            break;
        case 'From Office':
            this.filteredArray = value.filter(item => item.start === place);
            break;
        case 'others':
            this.filteredArray = value;
            break;
        default:
            this.filteredArray = value;
    }
    return this.filteredArray;
  }
}
