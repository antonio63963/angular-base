import { Injectable, inject } from '@angular/core';

import { AuthService } from './services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

export const authGuard = async () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const route = inject(ActivatedRoute);

  const isAuth = await authService.checkAuth();
  const param = route.params;
  console.log('ROute: ', param)
  if (isAuth) {
    return true;
  }else {
    router.navigate(['/'], {queryParams: {isAuth: false}})
  }

  // Redirect to the login page
  return router.parseUrl('/login');
};
