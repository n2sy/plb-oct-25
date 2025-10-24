import { Component, inject } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { GestionCandidatsService } from '../services/gestion-candidats.service';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrl: './infos.component.css',
})
export class InfosComponent {
  id;
  candidatCible: Candidat;
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);
  private CandidatSer = inject(GestionCandidatsService);

  ngOnInit() {
    //1ere version
    //this.id = this.activatedRoute.snapshot.paramMap.get('id');
    //2eme version
    this.activatedRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        this.CandidatSer.getCandidatByIdAPI(p.get('id')).subscribe({
          next: (response: Candidat) => {
            this.candidatCible = response;
          },
          error: (error) => {
            console.log(error);

            alert("Aucun candidat n'existe avec cet id");
            this.router.navigateByUrl('/not-found');
          },
        });
      },
    });

    //
  }
}
