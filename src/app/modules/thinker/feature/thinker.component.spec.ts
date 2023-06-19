import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThinkerComponent } from './thinker.component';

describe('ThinkerComponent', () => {
  let component: ThinkerComponent;
  let fixture: ComponentFixture<ThinkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThinkerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThinkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
