import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { retryInterceptor } from './core/interceptors/retry.interceptor';
import { requestInterceptor } from './core/interceptors/request.interceptor';
import { responseInterceptor } from './core/interceptors/response.interceptor';
import { attachServicehostInterceptor } from './core/interceptors/attach-servicehost.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([attachServicehostInterceptor,responseInterceptor,requestInterceptor, retryInterceptor])),

  ]
};
