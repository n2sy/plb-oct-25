import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], selStatut: string): any[] {
    if (!selStatut.length) return value;
    else {
      let newTabServers = [];
      for (const server of value) {
        if (server['status'] == selStatut) newTabServers.push(server);
      }
      return newTabServers;
    }
  }
}
