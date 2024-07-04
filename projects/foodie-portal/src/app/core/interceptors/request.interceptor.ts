import { HttpInterceptorFn } from '@angular/common/http';

export const requestInterceptor: HttpInterceptorFn = (req, next) => {
  const savedHeaders = JSON.parse(sessionStorage.getItem("requetHeaders") || '{}');
  
  if (Object.keys(savedHeaders).length > 0) {
      sessionStorage.setItem('requestHeaders', JSON.stringify(savedHeaders));
      req = req.clone({
        setHeaders: {
          ...savedHeaders
        }
      });
    }
  return next(req);
};
