import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core';
import { Produto } from '../../models/produto';
import { RouterLink } from '@angular/router';
import { ListaDesejosService } from '../../services/lista-desejos.service';

@Component({
  imports: [CommonModule, RouterLink],
  selector: 'app-catalogo-produtos',
  styleUrl: './catalogo-produtos.css',
  templateUrl: './catalogo-produtos.html',
})

export class CatalogoProdutos implements OnInit {

  produtos: Produto[] = [];

  constructor(private listaDesejosService: ListaDesejosService) { }

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
