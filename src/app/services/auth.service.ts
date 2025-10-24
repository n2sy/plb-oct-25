import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = 'http://localhost:3000/auth';
  constructor(private http: HttpClient) {}

  inscription(identifiants) {
    return this.http.post(`${this.url}/register`, identifiants);
  }

  seConnecter(identifiants) {
    return this.http.post(`${this.url}/login`, identifiants);
  }

  seDeconnecter() {}

  estConnecte() {}
}
