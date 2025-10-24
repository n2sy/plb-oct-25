import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GestionCandidatsService } from '../services/gestion-candidats.service';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent {
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);
  private candSer = inject(GestionCandidatsService);
  candidatAMettreAJour: Candidat;

  ngOnInit() {
    this.candidatAMettreAJour = this.candSer.getCandidatById(
      this.activatedRoute.snapshot.paramMap.get('id')
    );
  }

  submitHandler(fValue) {
    fValue._id = this.candidatAMettreAJour._id;
    this.candSer.updateCandidat(fValue);
    this.router.navigateByUrl('/cv');
  }
}
