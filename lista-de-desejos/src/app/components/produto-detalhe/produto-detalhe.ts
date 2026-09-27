import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Produto } from '../../models/produto';
import { ListaDesejosService } from '../../services/lista-desejos.service';

@Component({
  imports: [CommonModule, RouterLink],
  selector: 'app-produto-detalhe',
  styleUrl: './produto-detalhe.css',
  templateUrl: './produto-detalhe.html',
})
export class ProdutoDetalhe implements OnInit {

  produto: Produto | null = null;

  constructor(
    private route: ActivatedRoute,
    private listaDesejosService: ListaDesejosService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.listaDesejosService.buscarProdutoPorId(id).subscribe({
      next: (produto) => {
        this.produto = produto;
        this.cdr.detectChanges();
      },
      error: (erro) => {
        console.error('Erro ao buscar produto:', erro);
      }
    });
  }
}