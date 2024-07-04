import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { tap } from 'rxjs';

export const responseInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    tap(event => {
      if (event instanceof HttpResponse) {
        const headersToSave = { ...event.headers.keys()
          .filter(key => key.startsWith('x-custom-'))
          .reduce((acc, key) => ({ ...acc, [key]: event.headers.get(key) }), {}) 
        };

        sessionStorage.setItem('requestHeaders', JSON.stringify(headersToSave));
      }
    })
  );
};
