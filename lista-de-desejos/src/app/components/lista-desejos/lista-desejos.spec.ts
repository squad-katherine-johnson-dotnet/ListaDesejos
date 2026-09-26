import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaDesejos } from './lista-desejos';

describe('ListaDesejos', () => {
  let component: ListaDesejos;
  let fixture: ComponentFixture<ListaDesejos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaDesejos],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaDesejos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});
