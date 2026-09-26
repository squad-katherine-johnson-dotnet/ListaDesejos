import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CatalogoProdutos } from './catalogo-produtos';
import { ListaDesejosService } from '../../services/lista-desejos.service';
import { of } from 'rxjs';

describe('CatalogoProdutos', () => {
  let component: CatalogoProdutos;
  let fixture: ComponentFixture<CatalogoProdutos>;

  const serviceMock = {
    buscarProdutos: () => of([]),
    adicionarDesejo: () => { }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogoProdutos],
      providers: [
        {
          provide: ListaDesejosService,
          useValue: serviceMock
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CatalogoProdutos);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve carregar os produtos ao iniciar', () => {
    expect(component.produtos).toEqual([]);
  });
});
