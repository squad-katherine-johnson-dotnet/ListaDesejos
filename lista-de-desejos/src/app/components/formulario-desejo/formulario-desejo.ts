import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { ListaDesejosService } from '../../services/lista-desejos.service';
import { Produto } from '../../models/produto';
import { Desejo } from '../../models/desejo';

@Component({
  selector: 'app-formulario-desejo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulario-desejo.html',
  styleUrl: './formulario-desejo.css'
})
export class FormularioDesejo {

  formulario: FormGroup = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    prioridade: new FormControl('', [Validators.required])
  });

  constructor(private listaDesejosService: ListaDesejosService) {}

  adicionarDesejo(): void {
    if (this.formulario.valid) {
      const { nome, prioridade } = this.formulario.value;

      const produto: Produto = {
        id: Date.now(),
        title: nome,
        price: 0,
        description: '',
        category: '',
        image: ''
      };

      const desejo: Desejo = {
        produto,
        prioridade
      };

      this.listaDesejosService.adicionarDesejo(desejo);

      this.formulario.reset();
    }
  }
}
