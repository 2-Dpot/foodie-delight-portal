import { HttpErrorResponse } from "@angular/common/http";

export interface ErrorState {
  error: HttpErrorResponse | unknown;
  count: number;
}