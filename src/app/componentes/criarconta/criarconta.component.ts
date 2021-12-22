import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'app/services/login.service';
import * as CryptoJS from "crypto-js";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-criarconta',
  templateUrl: './criarconta.component.html',
  styleUrls: ['./criarconta.component.css']
})
export class CriarcontaComponent implements OnInit {

  constructor(public router : Router, public ngZone : NgZone, public loginService : LoginService) { }

  ngOnInit(): void {
    var body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');

        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
  }

  CriarConta(email, nome, senha){
    let senhaerror, emailerror
    // let senhaMD5 = CryptoJS.MD5(senha)
    this.loginService.setCadastro(email.value, nome.value, senha);
    Swal.fire('Uhul','Conta cadastrada com sucesso','success');
    this.ngZone.run(() => {
      this.router.navigate(['/login']);
      emailerror = 0;  
    })
  }
  
}
