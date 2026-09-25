import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { ListaDesejosService } from '../../services/lista-desejos.service';

@Component({
  selector: 'app-formulario-desejo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulario-desejo.component.html',
  styleUrl: './formulario-desejo.component.css'
})
export class FormularioDesejoComponent {

  // Criamos o formulário reativo com os dois campos e as validações obrigatórias
  formulario: FormGroup = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    prioridade: new FormControl('', [Validators.required])
  });

  // Injetamos o serviço para poder enviar o novo item
  constructor(private listaDesejosService: ListaDesejosService) {}

  // Método chamado ao clicar em enviar
  adicionarDesejo(): void {
    if (this.formulario.valid) {
      // Pega os valores digitados/selecionados
      const novoDesejo = {
        nome: this.formulario.value.nome,
        prioridade: this.formulario.value.prioridade
      };

      // Envia para o serviço da squad
      this.listaDesejosService.adicionarDesejo(novoDesejo);

      // Reseta o formulário
      this.formulario.reset();
    }
  }
}