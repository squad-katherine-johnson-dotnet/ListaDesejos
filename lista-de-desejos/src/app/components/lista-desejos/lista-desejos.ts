import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaDesejosService } from '../../services/lista-desejos.service';
import { Desejo } from '../../models/desejo';

@Component({
  selector: 'app-lista-desejos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-desejos.html',
  styleUrl: './lista-desejos.css'
})
export class ListaDesejos {

  constructor(private listaDesejosService: ListaDesejosService) {}

  get desejos(): Desejo[] {

    return this.listaDesejosService.buscarDesejos();
  }

  removerDesejo(produtoId: number): void {

    this.listaDesejosService.removerDesejo(produtoId);
  }
}
