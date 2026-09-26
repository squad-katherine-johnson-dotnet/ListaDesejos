import { Injectable } from '@angular/core';
import { Desejo } from '../models/desejo';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../models/produto';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListaDesejosService {

  private readonly apiUrl = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) { }

  private desejos: Desejo[] = [];

  private desejosSubject = new BehaviorSubject<Desejo[]>(this.desejos);

  desejos$ = this.desejosSubject.asObservable();

  buscarProduto(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.apiUrl);
  }

  buscarProdutoPorId(id: number): Observable<Produto> {
    return this.http.get<Produto>(`${this.apiUrl}/${id}`);
  }

  buscarDesejos(): Desejo[] {
    return [...this.desejos];
  }

  adicionarDesejo(desejo: Desejo): boolean {
    const jaExiste = this.desejos.some(
      item => item.produto.id === desejo.produto.id
    );

    if (jaExiste) {
      return false;
    }

    this.desejos.push(desejo);
    return true;
  }

  removerDesejo(produtoId: number): void {

    this.desejos = this.desejos.filter(
      desejo => desejo.produto.id !== produtoId
    );

    this.desejosSubject.next(this.desejos);
  }
}
