import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CatalogoProdutos } from './catalogo-produtos';

describe('CatalogoProdutos', () => {
  let component: CatalogoProdutos;
  let fixture: ComponentFixture<CatalogoProdutos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogoProdutos],
    }).compileComponents();

    fixture = TestBed.createComponent(CatalogoProdutos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
