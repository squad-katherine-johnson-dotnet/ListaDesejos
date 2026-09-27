import { Component, OnInit } from '@angular/core';
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
export class ListaDesejos implements OnInit {

  desejos: Desejo[] = [];

  constructor(
    private listaDesejosService: ListaDesejosService
  ) { }

  ngOnInit(): void {
    this.listaDesejosService.desejos$.subscribe(
      desejos => {
        this.desejos = desejos;
      }
    );
  }

  removerDesejo(produtoId: number): void {
    this.listaDesejosService.removerDesejo(produtoId);
  }
}
