import { TestBed } from '@angular/core/testing';

import { ColaboradorValidatorService } from './colaborador-validator.service';

describe('ColaboradorValidatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ColaboradorValidatorService = TestBed.get(ColaboradorValidatorService);
    expect(service).toBeTruthy();
  });
});
