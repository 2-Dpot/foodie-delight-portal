import { HttpInterceptorFn } from '@angular/common/http';
import { UtilityService } from '../services/utility.service';
import { inject } from '@angular/core';

export const attachServicehostInterceptor: HttpInterceptorFn = (req, next) => {
  const utilService = inject(UtilityService);
  if (req.url) {
    const apiReq = req.clone({
      url: `${utilService.envConfig.serviceHost}${req.url}`
    });
    return next(apiReq);
  } else {
    return next(req);
  }
};
