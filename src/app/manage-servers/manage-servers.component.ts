import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-servers',
  templateUrl: './manage-servers.component.html',
  styleUrl: './manage-servers.component.css',
})
export class ManageServersComponent {
  tabServers = [
    {
      name: 'Production server',
      type: 'medium',
      date_d: new Date(2020, 4, 6),
      status: 'critical',
    },
    {
      name: 'Development Test server',
      type: 'large',
      date_d: new Date(2023, 4, 2),
      status: 'stable',
    },
    {
      name: 'Development server',
      type: 'medium',
      date_d: new Date(2025, 2, 2),
      status: 'offline',
    },
    {
      name: 'Nidhal server',
      type: 'large',
      date_d: new Date(2020, 4, 6),
      status: 'stable',
    },
  ];
  selectedStatut = '';

  affecterClasse(st) {
    return {
      'list-group-item-success': st == 'stable',
      'list-group-item-danger': st == 'critical',
      'list-group-item-warning': st == 'offline',
    };
  }
}
