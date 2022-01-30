import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

declare var $:any;

@Injectable({
  providedIn: 'root'
})
export class VinhosService {
  Url = '/vinhos'

  constructor() { }

  getVinhos(){
    return $.ajax({
      async: false,
      type: 'GET',
      url: (environment.url+this.Url)
    })
  }
}
