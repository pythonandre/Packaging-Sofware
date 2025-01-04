import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxWithShadowComponent } from './box-with-shadow.component';

describe('BoxWithShadowComponent', () => {
  let component: BoxWithShadowComponent;
  let fixture: ComponentFixture<BoxWithShadowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoxWithShadowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxWithShadowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
