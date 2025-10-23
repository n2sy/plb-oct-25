import { Component, inject } from '@angular/core';
import { Candidat } from '../models/candidat';
import { FirstService } from '../services/first.service';
import { GestionCandidatsService } from '../services/gestion-candidats.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css',
  //providers: [FirstService],
})
export class CvComponent {
  tabCandidats: Candidat[] = [];
  selectedCandidate: Candidat;

  //1ere manière pour injecter un sercice
  //constructor(private firstSer: FirstService) {}

  //2ème manière pour injecter un sercice
  private firstSer = inject(FirstService);
  private candidatSer = inject(GestionCandidatsService);

  ngOnInit() {
    this.tabCandidats = this.candidatSer.getAllCandidates();
    this.firstSer.afficherSalut();
  }

  recupererCandidatSelectionne(cand) {
    this.selectedCandidate = cand;
  }

  ajouterCandidat() {
    this.candidatSer.addCandidate();
  }

  showListCandidates() {
    console.log(this.candidatSer.getAllCandidates());
  }
}
