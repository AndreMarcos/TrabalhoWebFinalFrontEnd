import { Component, OnInit } from '@angular/core';
import { LoginService } from 'app/services/login.service';
import * as CryptoJS from "crypto-js";

@Component({
  selector: 'app-criarconta',
  templateUrl: './criarconta.component.html',
  styleUrls: ['./criarconta.component.css']
})
export class CriarcontaComponent implements OnInit {

  constructor(public loginService : LoginService) { }

  ngOnInit(): void {
    var body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');

        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
  }

  CriarConta(email, nome, senha){
    let senhaMD5 = CryptoJS.MD5(senha)
    console.log(this.loginService.setCadastro(email.value, nome.value, senhaMD5))
  }
  
}
