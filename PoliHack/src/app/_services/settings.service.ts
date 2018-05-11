import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private url: string = "http://10.42.0.104:3000/";

  public getUrl()
  {
    return this.url;
  }
  constructor() { }
}
