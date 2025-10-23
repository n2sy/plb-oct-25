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
      date_d: new Date(4, 6, 2020),
      status: 'critical',
    },
    {
      name: 'Development Test server',
      type: 'large',
      date_d: new Date(4, 2, 2023),
      status: 'stable',
    },
    {
      name: 'Development server',
      type: 'medium',
      date_d: new Date(2, 2, 2025),
      status: 'offline',
    },
    {
      name: 'Nidhal server',
      type: 'large',
      date_d: new Date(4, 6, 2020),
      status: 'stable',
    },
  ];
}
