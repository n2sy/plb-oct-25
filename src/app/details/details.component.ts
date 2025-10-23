import { Component, inject, Input } from '@angular/core';
import { Candidat } from '../models/candidat';
import { GestionRecruesService } from '../services/gestion-recrues.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  @Input() selCandidate: Candidat;

  private recrueSer = inject(GestionRecruesService);

  addNewRecrue() {
    this.recrueSer.addRecrue(this.selCandidate);
  }
}
