import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexLogadoComponent } from './index-logado.component';

describe('IndexLogadoComponent', () => {
  let component: IndexLogadoComponent;
  let fixture: ComponentFixture<IndexLogadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexLogadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexLogadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
