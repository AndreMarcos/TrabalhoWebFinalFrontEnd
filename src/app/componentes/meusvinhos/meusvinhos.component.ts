import { Component, OnInit } from '@angular/core';
import { VinhosService } from 'app/services/vinhos.service';
import Swal from 'sweetalert2'

import { environment } from '../../../environments/environment';
declare var $:any;

@Component({
  selector: 'app-meusvinhos',
  templateUrl: './meusvinhos.component.html',
  styleUrls: ['./meusvinhos.component.css']
})
export class MeusvinhosComponent implements OnInit {
  Vinhos = []
  VinhosUser = []
  Url = "/vinhos"
  constructor(public vinhosService : VinhosService) { 
    this.Vinhos = this.vinhosService.getVinhos().responseJSON
    let idUser = localStorage.getItem('userID')
    for(let i = 0; i < this.Vinhos.length; i++){
      if(idUser == this.Vinhos[i].userID){
        this.VinhosUser.push(this.Vinhos[i])
      }
    }

  }

  ngOnInit(): void {
  }

  cadastroVinho(img, nome, vinicola, pais, tipovinho, tipouva, harmonizacao){
    // let fileToUpload: File = null;
    // fileToUpload = img.item(0);
    // console.log(fileToUpload)
    img = "vinhozinho.png"
    let vinho = {
      "img" : img,
      "nome" : nome,
      "pais" : pais,
      "tipo_vinho" : tipovinho,
      "tipo_uva" : tipouva,
      "harmonizacao" : harmonizacao,
      "vinicola" : vinicola,
      "userID" :  localStorage.getItem('userID')
    }

    $.ajax({
      type: "POST",
      dataType: "json",
      // contentType: 'application/json',
      url: environment.url + this.Url,
      data: JSON.stringify(vinho),
      processData: false,
      contentType: "application/json; charset=UTF-8",
      success: function() {
        console.log("Cadastrado")
      }
    })

    Swal.fire('','Vinho cadastrado!', 'success');
  }

  // mostraCadsatro(){
  //   Swal.fire({
  //     title: 'Cadastro de Vinho',
  //     showCloseButton: true,
  //     showDenyButton: true,
  //     denyButtonText: 'Cancelar',
  //     confirmButtonText: 'Cadastrar',
  //     html: '<label for="file-upload" class="custom-file-upload"> Rótulo </label>' +
  //           '<div class="input-group form-group-no-border input-lg" [ngClass]="{"input-group-focus":focus2===true}">'+
  //           '<input type="file" accept="image/png, image/jpeg" id="file-upload" class="form-control" placeholder="Vinícola" (focus)="focus=true" (blur)="focus2=false" />' +
  //           '</div>' +
      
  //           '<div class="input-group form-group-no-border input-lg" [ngClass]="{"input-group-focus":focus===true}">'+
  //           '<input type="text" class="form-control" placeholder="Nome do Vinho" id="nome" (focus)="focus=true" (blur)="focus=false" />' +
  //           '</div>' +

  //           '<div class="input-group form-group-no-border input-lg" [ngClass]="{"input-group-focus":focus2===true}">'+
  //           '<input type="text" class="form-control" placeholder="Vinícola" (focus)="focus=true" (blur)="focus2=false" #produtor />' +
  //           '</div>' +

  //           '<div class="input-group form-group-no-border input-lg" [ngClass]="{"input-group-focus":focus3===true}">'+
  //           '<input type="text" class="form-control" placeholder="País" (focus)="focus=true" (blur)="focus3=false" #produtor />' +
  //           '</div>' +

  //           '<div class="input-group form-group-no-border input-lg" [ngClass]="{"input-group-focus":focus4===true}">'+
  //           '<input type="text" class="form-control" placeholder="Tipo de Vinho" (focus)="focus=true" (blur)="focus4=false" #produtor />' +
  //           '</div>' +

  //           '<div class="input-group form-group-no-border input-lg" [ngClass]="{"input-group-focus":focus5===true}">'+
  //           '<input type="text" class="form-control" placeholder="Tipo de Uva" (focus)="focus=true" (blur)="focus5=false" #produtor />' +
  //           '</div>' +

  //           '<div class="input-group form-group-no-border input-lg" [ngClass]="{"input-group-focus":focus6===true}">'+
  //           '<input type="text" class="form-control" placeholder="Harmonização" (focus)="focus=true" (blur)="focus6=false" #produtor />' +
  //           '</div>',
  //     preConfirm: () => {
      
  //     }

  //   }).then((result) => {
  //     /* Read more about isConfirmed, isDenied below */
  //     let nome = document.querySelector("#nome")
      
  //     console.log(nome)
  //     if (result.isConfirmed) {

  //       Swal.fire('Vinho salvo!', '', 'success')
  //     } else if (result.isDenied) {
  //       Swal.fire('Operação cancelada', '', 'info')
  //     }
  //   })
  // }

}
