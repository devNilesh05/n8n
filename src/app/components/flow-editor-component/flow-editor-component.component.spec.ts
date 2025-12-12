import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowEditorComponentComponent } from './flow-editor-component.component';

describe('FlowEditorComponentComponent', () => {
  let component: FlowEditorComponentComponent;
  let fixture: ComponentFixture<FlowEditorComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlowEditorComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlowEditorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
