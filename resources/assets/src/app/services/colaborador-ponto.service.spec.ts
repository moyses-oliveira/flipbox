import { TestBed } from '@angular/core/testing';

import { ColaboradorPontoService } from './colaborador-ponto.service';

describe('ColaboradorPontoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ColaboradorPontoService = TestBed.get(ColaboradorPontoService);
    expect(service).toBeTruthy();
  });
});
