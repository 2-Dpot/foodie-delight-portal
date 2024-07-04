import { HttpHeaders, HttpContext, HttpParams } from "@angular/common/http";

export interface Optionsrequest {
  headers?: HttpHeaders | {
      [header: string]: string | string[];
  };
  observe?: 'response' | 'body' | 'events';
  context?: HttpContext;
  params?: HttpParams | {
      [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
  };
  reportProgress?: boolean;
  responseType?: 'json' | 'arraybuffer' | 'blob' | 'text' | 'stream';
  withCredentials?: boolean;
  transferCache?: {
      includeHeaders?: string[];
  } | boolean;
}