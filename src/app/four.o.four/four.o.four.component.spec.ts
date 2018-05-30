import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourOFour } from './four.o.four.component';

describe('FourOFour', () => {
  let component: FourOFour;
  let fixture: ComponentFixture<FourOFour>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourOFour ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourOFour);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
