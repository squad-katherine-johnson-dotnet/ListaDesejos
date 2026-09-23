import { Component } from '@angular/core';
import { ListaDesejosService } from '../../services/lista-desejos';

@Component({
  imports: [],
  selector: 'app-catalogo-produtos',
  styleUrl: './catalogo-produtos.css',
  templateUrl: './catalogo-produtos.html',
})
export class CatalogoProdutos {
  constructor(private listaDesejosService: ListaDesejosService) {}

}
