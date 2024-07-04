import { Injectable } from '@angular/core';
import { EnvConfig } from '../../interfaces/environment.interface';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  #envConfig!: EnvConfig;

  get envConfig(): EnvConfig {
    return this.#envConfig;
  }
  set envConfig(envConfig: EnvConfig) {
    this.#envConfig = envConfig;
  }
}
