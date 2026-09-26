import { CommonModule } from '@angular/common'
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
  mensagem: string = '';
  mostrarMensagem: boolean = false;

  constructor(
  private listaDesejosService: ListaDesejosService,
  private cdr: ChangeDetectorRef
) { }

  ngOnInit(): void {
    this.buscarProdutos();
  }

  buscarProdutos(): void {

    this.listaDesejosService.buscarProduto().subscribe({

      next: (produtos) => {
        this.produtos = produtos;
        this.cdr.detectChanges();
},
      error: (erro) => {

        console.error('Erro ao buscar produtos:', erro);
      }
    });
  }
  adicionarDesejo(produto: Produto): void {
    const jaExiste = this.listaDesejosService
      .buscarDesejos()
      .some(desejo => desejo.produto.id === produto.id);

    if (jaExiste) {
      this.mensagem = 'Esse produto já está na sua lista de desejos!';
    } else {
      this.listaDesejosService.adicionarDesejo({
        produto,
        prioridade: 'media'
      });

      this.mensagem = 'Produto adicionado à lista de desejos!';
    }

    this.mostrarMensagem = true;
  }

}
