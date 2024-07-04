// custom-http-client.service.ts

import { HttpClient, HttpHandler } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Optionsrequest } from "../../interfaces/options-request.interface";

type ParentGetParams = Parameters<HttpClient["get"]>;
type OGetType = ParentGetParams[1];  
type ParentPostParams = Parameters<HttpClient["post"]>;
type OPostType = ParentPostParams[1];
type ParentPutParams = Parameters<HttpClient["put"]>;
type OPutType = ParentPutParams[1];
type ParentDeleteParams = Parameters<HttpClient["delete"]>;
type ODeleteType = ParentDeleteParams[1];
type OptionsForAll = OGetType | OPostType | OPutType | ODeleteType;





@Injectable({ providedIn: 'root' })
  
export class CustomHttpClient extends HttpClient {
  constructor(handler: HttpHandler) {
    super(handler);
  }

  returnDefaultOptions(options: OptionsForAll | null | undefined): OptionsForAll{
    if (!options) {
      options = {observe: 'body', responseType: 'json'};
    }
    if (options && Object.keys(options).length > 0) {      
      options = {
        ...options,
        observe: options.observe || 'body',
        responseType: options.responseType || 'json'
      };
    }
    return options;
  }

  superGet<T>(url: string, options?: OptionsForAll) {
    return super.get<T>(url, this.returnDefaultOptions(options)) as T;
  }

  superPost<T>(url: string, body: any, options?: OptionsForAll) {
    return super.post<T>(url, body, this.returnDefaultOptions(options)) as T;
  }

  superPut<T>(url: string, body: any, options?: Optionsrequest) {
  }

  superDelete<T>(url: string, options?: Optionsrequest) {
  }
}
