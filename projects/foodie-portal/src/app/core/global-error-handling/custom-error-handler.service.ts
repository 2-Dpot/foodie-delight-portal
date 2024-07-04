import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomErrorHandlerService implements ErrorHandler {

  constructor() { }

  handleError(error: unknown) {
    if (error instanceof HttpErrorResponse) {
      console.error('An error occurred http:', error);
    } else if (error instanceof Error) {
      console.error('An error occurred j:', error);
    } else {
      console.error('An error occurred unknown:', error);
    }
      
  }
}
