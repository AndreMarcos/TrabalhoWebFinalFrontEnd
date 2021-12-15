import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'app/services/login.service';
import * as CryptoJS from "crypto-js";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router : Router, public ngZone : NgZone, public loginService : LoginService) { }

  ngOnInit(): void {
    var body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');

        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
  }


  Login(email, senha){
    let senhaerror, emailerror
    let listUsers = this.loginService.getListUsers();
    listUsers = listUsers.responseJSON
    let senhaMD5 = CryptoJS.MD5(senha)
    for(let i = 0; i < listUsers.length; i++){
      if(email == listUsers[i].email){
        if(senhaMD5 == listUsers[i].senha){
          localStorage.setItem('userName', listUsers[i].nome)
          localStorage.setItem('userID', listUsers[i]._id)
          this.ngZone.run(() => {
            this.router.navigate(['/indexlogado']);
            emailerror = 0;  
          })
        }else{
          senhaerror = 1;
        }
      }else{
        emailerror = 1;
      }
    }
    if(senhaerror == 1){
      // alert('Senha inválida')
    }
    if(emailerror == 1){
      // alert('E-mail inválido')
    }
  }

  CriarConta(){
    this.ngZone.run(() => {
      this.router.navigate(['/criarconta']);  
    })
  }

}
