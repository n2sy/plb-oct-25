import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css',
})
export class AccueilComponent {
  private router = inject(Router);
  private http = inject(HttpClient);

  ngOnInit() {
    // this.http.get('https://jsonplaceholder.typicode.com/usersss').subscribe({
    //   next: (data) => {
    //     console.log('Données : ', data);
    //   },
    //   error: (err) => {
    //     console.log('Erreur capturée : ', err);
    //   },
    //   complete: () => {
    //     console.log('Au revoir');
    //   },
    // });
  }

  goToCv() {
    this.router.navigateByUrl('cv');
  }

  goToServers() {
    this.router.navigate(['accounts']);
  }
}
