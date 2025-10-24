import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const blockGuard: CanActivateFn = (route, state) => {
  let authSer = inject(AuthService);
  if (authSer.estConnecte()) return false;
  else {
    return true;
  }
};
