import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaColaboradorComponent } from './lista-colaborador.component';

describe('ListaColaboradorComponent', () => {
  let component: ListaColaboradorComponent;
  let fixture: ComponentFixture<ListaColaboradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaColaboradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaColaboradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
