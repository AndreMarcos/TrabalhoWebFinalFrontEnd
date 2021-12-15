import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeusvinhosComponent } from './meusvinhos.component';

describe('MeusvinhosComponent', () => {
  let component: MeusvinhosComponent;
  let fixture: ComponentFixture<MeusvinhosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeusvinhosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeusvinhosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
