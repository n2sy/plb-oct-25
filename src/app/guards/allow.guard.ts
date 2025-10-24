import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const allowGuard: CanActivateFn = (route, state) => {
  let authSer = inject(AuthService);
  let router = inject(Router);
  if (authSer.estConnecte()) return true;
  else {
    //router.navigateByUrl('/login');
    return false;
  }
};
