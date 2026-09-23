import { TestBed } from '@angular/core/testing';
import { ListaDesejos } from './lista-desejos';

describe('ListaDesejos', () => {
  let service: ListaDesejos;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaDesejos);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
