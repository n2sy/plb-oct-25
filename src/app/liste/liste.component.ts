import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Candidat } from '../models/candidat';
import { GestionCandidatsService } from '../services/gestion-candidats.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrl: './liste.component.css',
  //providers: [GestionCandidatsService],
})
export class ListeComponent {
  allCandidates: Candidat[] = [];
  @Output() eventToCv = new EventEmitter<Candidat>();

  private candidateSer = inject(GestionCandidatsService);

  ngOnInit() {
    this.candidateSer.getAllCandidatesAPI().subscribe({
      next: (response: Candidat[]) => {
        this.allCandidates = response;
      },
      error: (err) => {
        alert('Connexion impossible... chargement de données fictives');
        this.allCandidates = this.candidateSer.getAllCandidates();
      },
    });
  }

  sendCandidateToCv(cand) {
    this.eventToCv.emit(cand);
  }

  showListCandidates() {
    console.log(this.candidateSer.getAllCandidates());
  }
}
