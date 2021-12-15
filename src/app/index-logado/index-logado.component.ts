import { Component, OnInit } from '@angular/core';
import { VinhosService } from 'app/services/vinhos.service';

@Component({
  selector: 'app-index-logado',
  templateUrl: './index-logado.component.html',
  styleUrls: ['./index-logado.component.css']
})
export class IndexLogadoComponent implements OnInit {
  Vinhos = []
  TiposVinhos = []
  PaisVinhos = []
  HarmonizacaoVinhos = []
  constructor(public vinhosService : VinhosService) {
    this.Vinhos = this.vinhosService.getVinhos().responseJSON
    for(let i = 0; i < this.Vinhos.length; i++ ){
      this.TiposVinhos[i] = this.Vinhos[i].tipo_vinho;
      this.PaisVinhos[i] = this.Vinhos[i].pais;
      this.HarmonizacaoVinhos[i] = this.Vinhos[i].harmonizacao;
    }
    for(let i = 0; i < this.TiposVinhos.length; i++){
      for(let j = 1; j < this.TiposVinhos.length; j++){
        if(this.TiposVinhos[i] == this.TiposVinhos[j]){
          let index = this.TiposVinhos.indexOf(this.TiposVinhos[i])
          this.TiposVinhos.splice(index, 0);
        }
      }
    }
    for(let i = 0; i < this.PaisVinhos.length; i++){
      for(let j = 1; j < this.PaisVinhos.length; j++){
        if(this.PaisVinhos[i] == this.PaisVinhos[j]){
          let index = this.PaisVinhos.indexOf(this.PaisVinhos[i])
          this.PaisVinhos.splice(index, 1);
        }
      }
    }
    for(let i = 0; i < this.HarmonizacaoVinhos.length; i++){
      for(let j = 1; j < this.HarmonizacaoVinhos.length; j++){
        if(this.HarmonizacaoVinhos[i] == this.HarmonizacaoVinhos[j]){
          let index = this.HarmonizacaoVinhos.indexOf(this.HarmonizacaoVinhos[i])
          this.HarmonizacaoVinhos.splice(index, 1);
        }
      }
    }
   }

  ngOnInit(): void {
  }

}
