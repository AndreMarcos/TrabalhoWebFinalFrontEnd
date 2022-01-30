import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
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
    // const headers = { 'content-type': 'application/json'}
    let user = {
      "nome" : nome,
      "email" : email,
      "senha" : senha
     }
    // const body = JSON.stringify(user)
    // console.log(body)
    // return this.http.post(environment.url + this.Url, body, {'headers':headers})
    $.ajax({
      type: "POST",
      dataType: "json",
      // contentType: 'application/json',
      url: environment.url + this.Url,
      data: JSON.stringify(user),
      processData: false,
      contentType: "application/json; charset=UTF-8",
      success: function() {
        console.log("Cadastrado")
      }
    })

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
