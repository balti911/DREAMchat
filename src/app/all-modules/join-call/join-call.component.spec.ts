import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinCallComponent } from './join-call.component';

describe('JoinCallComponent', () => {
  let component: JoinCallComponent;
  let fixture: ComponentFixture<JoinCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinCallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
