import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrl: './liste.component.css',
})
export class ListeComponent {
  @Input() allCandidates: Candidat[] = [];
  @Output() eventToCv = new EventEmitter<Candidat>();

  sendCandidateToCv(cand) {
    this.eventToCv.emit(cand);
  }
}
