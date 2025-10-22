import { Component, Input } from '@angular/core';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.css',
})
export class ItemComponent {
  @Input() unCandidat: Candidat;
}
