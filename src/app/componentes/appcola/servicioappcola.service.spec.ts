import { TestBed } from '@angular/core/testing';

import { ServicioappcolaService } from './servicioappcola.service';

describe('ServicioappcolaService', () => {
  let service: ServicioappcolaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioappcolaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
