import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { ListaDesejos } from '../../services/lista-desejos';

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

    constructor(private listaDesejosService: ListaDesejos) {}

      // Refatorar após implementação de catalogo-produto.ts
  adicionarDesejo(): void {
    if (this.formulario.valid) {
      const nome = this.formulario.value.nome;
      const prioridade = this.formulario.value.prioridade;

      console.log(nome, prioridade);

      this.formulario.reset();
    }
  }
}
