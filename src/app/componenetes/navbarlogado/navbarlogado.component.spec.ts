import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarlogadoComponent } from './navbarlogado.component';

describe('NavbarlogadoComponent', () => {
  let component: NavbarlogadoComponent;
  let fixture: ComponentFixture<NavbarlogadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarlogadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarlogadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
