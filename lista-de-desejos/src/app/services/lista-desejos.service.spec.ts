import { TestBed } from '@angular/core/testing';
import { ListaDesejosService } from './lista-desejos.service';

describe('ListaDesejos', () => {
  let service: ListaDesejosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaDesejosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
