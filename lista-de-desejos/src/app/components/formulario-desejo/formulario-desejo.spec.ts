import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormularioDesejo } from './formulario-desejo';
import { ListaDesejosService } from '../../services/lista-desejos.service';

describe('FormularioDesejo', () => {
  let component: FormularioDesejo;
  let fixture: ComponentFixture<FormularioDesejo>;
  let servicoFoiChamado: boolean;

  beforeEach(async () => {
    servicoFoiChamado = false;

    await TestBed.configureTestingModule({
      imports: [FormularioDesejo],
      providers: [
        {
          provide: ListaDesejosService,
          useValue: {
            adicionarDesejo: () => {
              servicoFoiChamado = true;
            }
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(FormularioDesejo);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('deve iniciar o formulário como inválido', () => {
    expect(component.formulario.invalid).toBe(true);
  });

  it('deve adicionar um desejo quando o formulário for válido', () => {
    component.formulario.setValue({
      nome: 'Notebook',
      prioridade: 'alta'
    });

    component.adicionarDesejo();

    expect(servicoFoiChamado).toBe(true);
  });
});
