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
  FiltroTipo = []
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

  changeFilterTipo(idLink){
    let html = ''
    if(document.getElementById(idLink).classList.contains('tipovinho')){
      document.getElementById(idLink).classList.remove('tipovinho');
      document.getElementById(idLink).classList.add('tipovinho-clicked');
      for(let i = 0; i < this.Vinhos.length; i++){
        if(this.Vinhos[i].tipo_vinho == idLink){
          this.FiltroTipo[i] = this.Vinhos[i]
          html = html + '<div class="card">' +
          '<img class="card-img-top img" src="assets/img/'+this.FiltroTipo[i].img+'">' +
          '<div class="card-body">' +
          '<h5 class="card-title">'+this.FiltroTipo[i].nome+'</h5>' +
          '<p class="card-text">Vínicola: '+ this.FiltroTipo[i].vinicola+'</p>' +
          '<p class="card-text">País: '+ this.FiltroTipo[i].pais + '</p>' +
          '<p class="card-text">Tipo: ' + this.FiltroTipo[i].tipo_vinho+'</p>'
          '<p class="card-text">Uva: '+this.FiltroTipo[i].tipo_uva+'</p>' +
          '<p class="card-text">Harmonização: '+this.FiltroTipo[i].harmonizacao+'</p>'+
          '<p class="card-text">Avaliação: 5 estrelas</p>' +
          '<a class="btn btn-primary"> Reviews</a>' +
          '</div></div>'
        }
      }
      document.getElementById('geral').style.display ='none';
      document.getElementById('filtrotipo').style.display = 'block';
      document.getElementById('filtrotipo').innerHTML = html;
    }else{
      document.getElementById(idLink).classList.remove('tipovinho-clicked');
      document.getElementById(idLink).classList.add('tipovinho');
      document.getElementById('geral').style.display ='block';
      document.getElementById('filtrotipo').style.display = 'none';
    }
  }

  changeFiltroPais(idLink){
    let html = ''
    if(document.getElementById(idLink).classList.contains('tipovinho')){
      document.getElementById(idLink).classList.remove('tipovinho');
      document.getElementById(idLink).classList.add('tipovinho-clicked');
      for(let i = 0; i < this.Vinhos.length; i++){
        if(this.Vinhos[i].pais == idLink){
          this.FiltroTipo[i] = this.Vinhos[i]
          html = html + '<div class="card">' +
          '<img class="card-img-top img" src="assets/img/'+this.FiltroTipo[i].img+'">' +
          '<div class="card-body">' +
          '<h5 class="card-title">'+this.FiltroTipo[i].nome+'</h5>' +
          '<p class="card-text">Vínicola: '+ this.FiltroTipo[i].vinicola+'</p>' +
          '<p class="card-text">País: '+ this.FiltroTipo[i].pais + '</p>' +
          '<p class="card-text">Tipo: ' + this.FiltroTipo[i].tipo_vinho+'</p>'
          '<p class="card-text">Uva: '+this.FiltroTipo[i].tipo_uva+'</p>' +
          '<p class="card-text">Harmonização: '+this.FiltroTipo[i].harmonizacao+'</p>'+
          '<p class="card-text">Avaliação: 5 estrelas</p>' +
          '<a class="btn btn-primary"> Reviews</a>' +
          '</div></div>'
        }
      }
      document.getElementById('geral').style.display ='none';
      document.getElementById('filtropais').style.display = 'block';
      document.getElementById('filtropais').innerHTML = html;
    }else{
      document.getElementById(idLink).classList.remove('tipovinho-clicked');
      document.getElementById(idLink).classList.add('tipovinho');
      document.getElementById('geral').style.display ='block';
      document.getElementById('filtropais').style.display = 'none';
    }
  }

  changeFiltroHarmonizacao(idLink){
    let html = ''
    if(document.getElementById(idLink).classList.contains('tipovinho')){
      document.getElementById(idLink).classList.remove('tipovinho');
      document.getElementById(idLink).classList.add('tipovinho-clicked');
      for(let i = 0; i < this.Vinhos.length; i++){
        if(this.Vinhos[i].harmonizacao == idLink){
          this.FiltroTipo[i] = this.Vinhos[i]
          html = html + '<div class="card">' +
          '<img class="card-img-top img" src="assets/img/'+this.FiltroTipo[i].img+'">' +
          '<div class="card-body">' +
          '<h5 class="card-title">'+this.FiltroTipo[i].nome+'</h5>' +
          '<p class="card-text">Vínicola: '+ this.FiltroTipo[i].vinicola+'</p>' +
          '<p class="card-text">País: '+ this.FiltroTipo[i].pais + '</p>' +
          '<p class="card-text">Tipo: ' + this.FiltroTipo[i].tipo_vinho+'</p>'
          '<p class="card-text">Uva: '+this.FiltroTipo[i].tipo_uva+'</p>' +
          '<p class="card-text">Harmonização: '+this.FiltroTipo[i].harmonizacao+'</p>'+
          '<p class="card-text">Avaliação: 5 estrelas</p>' +
          '<a class="btn btn-primary"> Reviews</a>' +
          '</div></div>'
        }
      }
      document.getElementById('geral').style.display ='none';
      document.getElementById('filtroharmonizacao').style.display = 'block';
      document.getElementById('filtroharmonizacao').innerHTML = html;
    }else{
      document.getElementById(idLink).classList.remove('tipovinho-clicked');
      document.getElementById(idLink).classList.add('tipovinho');
      document.getElementById('geral').style.display ='block';
      document.getElementById('filtroharmonizacao').style.display = 'none';
    }
  }

}
