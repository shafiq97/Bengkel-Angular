import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeDirectiveExampleComponent } from './pipe-directive-example.component';

describe('PipeDirectiveExampleComponent', () => {
  let component: PipeDirectiveExampleComponent;
  let fixture: ComponentFixture<PipeDirectiveExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeDirectiveExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeDirectiveExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
