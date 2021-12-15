import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

declare var $:any;

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  Url = '/user'
  constructor(private http: HttpClient) { }

  getListUsers(){
    return $.ajax({
      async: false,
      type: 'GET',
      url: (environment.url+this.Url)
    })
  }

  setCadastro(email, nome, senha){
    const body = {
      "nome" : nome,
      "email" : email,
      "senha" : senha
     }
    console.log(body)
    const headers = { 'content-type': 'application/json'}  
    return this.http.post(this.Url + this.Url, body, {'headers':headers})

    // $.ajax({
    //   type: "POST",
    //   url: (environment.url+this.Url),
    //   data: {
    //     email: email,
    //     nome: nome,
    //     senha: senha
    //   }
    // })
  }
}
