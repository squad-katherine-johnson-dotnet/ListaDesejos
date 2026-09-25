import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormularioDesejo } from './formulario-desejo';

describe('FormularioDesejo', () => {
  let component: FormularioDesejo;
  let fixture: ComponentFixture<FormularioDesejo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioDesejo],
    }).compileComponents();

    fixture = TestBed.createComponent(FormularioDesejo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
