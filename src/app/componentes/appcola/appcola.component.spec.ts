import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppcolaComponent } from './appcola.component';

describe('AppcolaComponent', () => {
  let component: AppcolaComponent;
  let fixture: ComponentFixture<AppcolaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppcolaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppcolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
