import { Component, inject } from '@angular/core';
import { GestionCandidatsService } from '../services/gestion-candidats.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class AddComponent {
  private candidatSer = inject(GestionCandidatsService);
  private router = inject(Router);
  submitHandler(fValue, e) {
    let formData = new FormData();
    formData.set('avatar', e.target[4].files[0]);
    this.candidatSer.uploadAvatar(formData).subscribe({
      next: (response: any) => {
        fValue.avatar = response.fileName;
        this.candidatSer.addCandidateAPI(fValue).subscribe({
          next: (response: any) => {
            alert(response.message);
            this.router.navigateByUrl('/cv');
          },
        });
      },
      error: (err) => {
        console.log(err);
        alert("Problème lors du upload de l'avatar");
      },
    });
    // this.candidatSer.addCandidate(fValue);
    // this.router.navigateByUrl('/cv');
  }
}
