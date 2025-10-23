import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css',
})
export class AccueilComponent {
  private router = inject(Router);

  goToCv() {
    this.router.navigateByUrl('cv');
  }

  goToServers() {
    this.router.navigate(['accounts']);
  }
}
