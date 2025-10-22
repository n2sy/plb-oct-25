import { Component } from '@angular/core';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
})
export class FirstComponent {
  prenom: string = 'Brice';
  color: string = 'green';
  show: boolean = false;

  traitement() {
    alert("J'ai été cliqué");
  }

  updatePrenom(inp: any) {
    this.prenom = inp.value;
  }

  lireMessage(msg: any) {
    this.prenom = msg;
  }
}
