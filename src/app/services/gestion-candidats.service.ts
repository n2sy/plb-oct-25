import { Injectable } from '@angular/core';
import { Candidat } from '../models/candidat';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GestionCandidatsService {
  url = 'http://localhost:3000/cv/candidats';
  private tabCandidats: Candidat[] = [
    new Candidat(1, 'bart', 'simpson', 23, 'ingénieur', 'bart.jpeg'),
    new Candidat(2, 'homer', 'simpson', 51, 'directeur', 'homer.png'),
    new Candidat(3, 'lisa', 'simpson', 27, 'designer', 'lisa.png'),
  ];

  constructor(private http: HttpClient) {}

  getAllCandidates() {
    return this.tabCandidats;
  }
  getAllCandidatesAPI() {
    return this.http.get(this.url);
  }

  addCandidate(newCand) {
    newCand._id = crypto.randomUUID();
    this.tabCandidats.push(newCand);
  }
  addCandidateAPI(newCand) {
    return this.http.post(`${this.url}/free`, newCand);
  }

  uploadAvatar(formData) {
    return this.http.post('http://localhost:3000/images/upload', formData);
  }

  //   addCandidate() {
  //     this.tabCandidats.push(
  //       new Candidat(3, 'NEW', 'CANDIDATE', 27, 'designer', 'lisa.png')
  //     );
  //   }

  getCandidatById(candidatId) {
    return this.tabCandidats.find((element) => element._id == candidatId);
  }

  getCandidatByIdAPI(candidatId) {
    return this.http.get(`${this.url}/${candidatId}`);
  }

  updateCandidat(uCand) {
    let i = this.tabCandidats.findIndex((element) => element._id == uCand._id);
    this.tabCandidats[i] = uCand;
  }
}
