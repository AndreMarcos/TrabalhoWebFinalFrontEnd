import { Component, OnInit } from '@angular/core';
import { VinhosService } from 'app/services/vinhos.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-meusvinhos',
  templateUrl: './meusvinhos.component.html',
  styleUrls: ['./meusvinhos.component.css']
})
export class MeusvinhosComponent implements OnInit {
  Vinhos = []

  constructor(public vinhosService : VinhosService) { 
    this.Vinhos = this.vinhosService.getVinhos().responseJSON

  }

  ngOnInit(): void {
  }

  mostraCadsatro(){
    Swal.fire({
      title: 'Cadastro de Vinho',
      showCloseButton: true,
      showDenyButton: true,
      denyButtonText: 'Cancelar',
      confirmButtonText: 'Cadastrar',
      html: '<label for="file-upload" class="custom-file-upload"> Rótulo </label>' +
            '<div class="input-group form-group-no-border input-lg" [ngClass]="{"input-group-focus":focus2===true}">'+
            '<input type="file" accept="image/png, image/jpeg" id="file-upload" class="form-control" placeholder="Vinícola" (focus)="focus=true" (blur)="focus2=false" #produtor >' +
            '</div>' +
      
            '<div class="input-group form-group-no-border input-lg" [ngClass]="{"input-group-focus":focus===true}">'+
            '<input type="text" class="form-control" placeholder="Nome do Vinho" (focus)="focus=true" (blur)="focus=false" #nome >' +
            '</div>' +

            '<div class="input-group form-group-no-border input-lg" [ngClass]="{"input-group-focus":focus2===true}">'+
            '<input type="text" class="form-control" placeholder="Vinícola" (focus)="focus=true" (blur)="focus2=false" #produtor >' +
            '</div>' +

            '<div class="input-group form-group-no-border input-lg" [ngClass]="{"input-group-focus":focus3===true}">'+
            '<input type="text" class="form-control" placeholder="País" (focus)="focus=true" (blur)="focus3=false" #produtor >' +
            '</div>' +

            '<div class="input-group form-group-no-border input-lg" [ngClass]="{"input-group-focus":focus4===true}">'+
            '<input type="text" class="form-control" placeholder="Tipo de Vinho" (focus)="focus=true" (blur)="focus4=false" #produtor >' +
            '</div>' +

            '<div class="input-group form-group-no-border input-lg" [ngClass]="{"input-group-focus":focus5===true}">'+
            '<input type="text" class="form-control" placeholder="Tipo de Uva" (focus)="focus=true" (blur)="focus5=false" #produtor >' +
            '</div>' +

            '<div class="input-group form-group-no-border input-lg" [ngClass]="{"input-group-focus":focus6===true}">'+
            '<input type="text" class="form-control" placeholder="Harmonização" (focus)="focus=true" (blur)="focus6=false" #produtor >' +
            '</div>'

    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Vinho salvo!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Operação cancelada', '', 'info')
      }
    })
  }

}
