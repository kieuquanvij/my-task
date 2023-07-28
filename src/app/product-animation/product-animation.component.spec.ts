import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAnimationComponent } from './product-animation.component';

describe('ProductAnimationComponent', () => {
  let component: ProductAnimationComponent;
  let fixture: ComponentFixture<ProductAnimationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductAnimationComponent]
    });
    fixture = TestBed.createComponent(ProductAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
