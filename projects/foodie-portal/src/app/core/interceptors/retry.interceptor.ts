import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { retryWhen, timer, throwError, Observable, mergeMap } from 'rxjs';
import { ErrorState } from '../../interfaces/error-state.interface';


export const retryInterceptor: HttpInterceptorFn = (req, next) => {
  const maxRetryAttempts = 3; 
  const retryDelayMs = 1000; 

  return next(req).pipe(
    retryWhen((errors: Observable<HttpErrorResponse | unknown>) =>
      errors.pipe(
        mergeMap((error: HttpErrorResponse | unknown, count: number) => {
          const errorState: ErrorState = { error, count };
          
          if (
            errorState.count < maxRetryAttempts &&
            errorState.error instanceof HttpErrorResponse &&
            [0, 500, 502, 503, 504].includes(errorState.error.status)
          ) {
            return timer(retryDelayMs);
          }

          return throwError(() => errorState.error);
        })
      )
    )
  );
};
