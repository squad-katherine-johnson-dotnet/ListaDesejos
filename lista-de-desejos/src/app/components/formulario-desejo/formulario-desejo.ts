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

  formulario: FormGroup = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    prioridade: new FormControl('', [Validators.required])
  });

    constructor(private listaDesejosService: any) {}
  
  adicionarDesejo(): void {
    if (this.formulario.valid) {
      const novoDesejo = {
        nome: this.formulario.value.nome,
        prioridade: this.formulario.value.prioridade
      };
     
      this.listaDesejosService.adicionarDesejo(novoDesejo);
      
            this.formulario.reset();
    }
  }
}