import { Injectable, inject } from '@angular/core';

import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

export const authGuard = async () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const isAuth = await authService.checkAuth();
  if (isAuth) {
    return true;
  }else {
    router.navigate(['/'], {queryParams: {isAuth: false}})
  }

  // Redirect to the login page
  return router.parseUrl('/login');
};
