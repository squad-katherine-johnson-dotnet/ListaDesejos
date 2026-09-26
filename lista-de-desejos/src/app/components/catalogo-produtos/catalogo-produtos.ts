import { CommonModule} from '@angular/common'
import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Produto } from '../../models/produto';
import { ListaDesejos } from '../../services/lista-desejos';
import { RouterLink } from '@angular/router';

@Component({
  imports: [CommonModule, FormsModule, RouterLink],
  selector: 'app-catalogo-produtos',
  styleUrl: './catalogo-produtos.css',
  templateUrl: './catalogo-produtos.html',
})

export class CatalogoProdutos implements OnInit {

   produtos: Produto[] = [];

  constructor(
    @Inject(ListaDesejos) private listaDesejosService: ListaDesejos
  ) {}

  ngOnInit(): void {
    this.buscarProdutos();
  }

  buscarProdutos(): void {
    this.listaDesejosService.buscarProdutos().subscribe({
      next: (produtos) => {
        this.produtos = produtos;
      },
      error: (erro) => {
        console.error('Erro ao buscar produtos:', erro);
      }
    });
  }
  adicionarDesejo(produto: Produto): void {
    this.listaDesejosService.adicionarDesejo({
      produto,
      prioridade: 'media'
    });
  }

}