import { Injectable } from '@angular/core';
import { Candidat } from '../models/candidat';

@Injectable({
  providedIn: 'root',
})
export class GestionCandidatsService {
  private tabCandidats: Candidat[] = [
    new Candidat(1, 'bart', 'simpson', 23, 'ingénieur', 'bart.jpeg'),
    new Candidat(2, 'homer', 'simpson', 51, 'directeur', 'homer.png'),
    new Candidat(3, 'lisa', 'simpson', 27, 'designer', 'lisa.png'),
  ];

  getAllCandidates() {
    return this.tabCandidats;
  }

  addCandidate() {
    this.tabCandidats.push(
      new Candidat(3, 'NEW', 'CANDIDATE', 27, 'designer', 'lisa.png')
    );
  }
  constructor() {}
}
