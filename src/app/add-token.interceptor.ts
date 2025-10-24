import { HttpInterceptorFn } from '@angular/common/http';

export const addTokenInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Req Originale', req);
  if (req.method == 'GET') return next(req);
  else {
    let token = localStorage.getItem('access_token');
    if (token) {
      let cloneReq = req.clone({
        setHeaders: { Authorization: `bearer ${token}` },
      });
      console.log('Req Clonée', cloneReq);
      return next(cloneReq);
    }

    return next(req);
  }
};
