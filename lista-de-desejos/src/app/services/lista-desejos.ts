import { Injectable } from '@angular/core';
import { Desejo } from '../models/desejo';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root'
})
export class ListaDesejos {

  private apiUrl = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) { }

  private desejos: Desejo[] = [];

  buscarProdutos() {

    return this.http.get<Produto[]>(this.apiUrl);
  }

  buscarProdutoPorId(id: number) {

    return this.http.get<Produto>(`${this.apiUrl}/${id}`);
  }

  buscarDesejos() {
    return this.desejos;
  }

  adicionarDesejo(desejo: Desejo) {

    const jaExiste = this.desejos.some(item => item.produto.id === desejo.produto.id);

    if (!jaExiste) {
      this.desejos.push(desejo);
    }
  }

  removerDesejo(produtoId: number) {

    this.desejos = this.desejos.filter(desejo => desejo.produto.id !== produtoId);
  }
}
