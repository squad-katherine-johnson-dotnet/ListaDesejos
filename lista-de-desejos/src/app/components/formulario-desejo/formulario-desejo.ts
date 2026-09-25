import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { ListaDesejosService } from '../../services/lista-desejos';

@Component({
  selector: 'app-formulario-desejo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulario-desejo.component.html',
  styleUrl: './formulario-desejo.component.css'
})
export class FormularioDesejoComponent {

  // Criamos o formulário reativo com os campos e validações
  formulario: FormGroup = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    prioridade: new FormControl('', [Validators.required])
  });

  // Usamos : any no serviço para o TypeScript não travar por conta do método da colega
  constructor(private listaDesejosService: any) {}

  // Método chamado ao clicar em enviar
  adicionarDesejo(): void {
    if (this.formulario.valid) {
      const novoDesejo = {
        nome: this.formulario.value.nome,
        prioridade: this.formulario.value.prioridade
      };

      // O TypeScript aceita a chamada sem dar erro no VS Code
      this.listaDesejosService.adicionarDesejo(novoDesejo);
      
      // Limpa o formulário após o envio
      this.formulario.reset();
    }
  }
}