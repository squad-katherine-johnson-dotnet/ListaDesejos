import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { ListaDesejos } from '../../services/lista-desejos/lista-desejos';

@Component({
  selector: 'app-formulario-desejo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulario-desejo.html',
  styleUrl: './formulario-desejo.css'
})
export class FormularioDesejoComponent {

  formGroup = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    prioridade: new FormControl('', [Validators.required])
  });

  constructor(private listaDesejosService: ListaDesejos) {}

  salvarDesejo(): void {
    if (this.formGroup.valid) {
      console.log('Dados do formulário:', this.formGroup.value);
    }
  }
}