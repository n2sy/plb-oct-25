import { Component } from '@angular/core';

@Component({
  selector: 'app-home-account',
  templateUrl: './home-account.component.html',
  styleUrl: './home-account.component.css',
})
export class HomeAccountComponent {
  allAccounts = [
    {
      name: 'Brice Account',
      status: 'active',
    },
    {
      name: 'Nidhal Account',
      status: 'inactive',
    },
  ];
}
