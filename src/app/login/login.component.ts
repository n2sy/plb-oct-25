import { Component, inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  competenceParDefaut = 'python';
  monCommentaire = 'Rien à signaler...';
  showRegister = true;
  showError = false;
  private authSer = inject(AuthService);
  private router = inject(Router);
  submitHandler(f: NgForm) {
    if (this.showRegister) {
      this.authSer.inscription(f.value).subscribe({
        next: (response: any) => {
          alert(response.message);
          this.toggleShowRegister();
        },
        error: (err) => {
          console.log(err);
        },
      });
    } else {
      this.authSer.seConnecter(f.value).subscribe({
        next: (response: any) => {
          alert(response.message);
          localStorage.setItem('access_token', response.token);
          this.router.navigateByUrl('/');
        },
        error: (err) => {
          this.showError = true;
          f.reset();
        },
      });
    }
  }

  toggleShowRegister() {
    this.showRegister = !this.showRegister;
  }
}
