import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsWithNoDiscountComponent } from './products-with-no-discount.component';

describe('ProductsWithNoDiscountComponent', () => {
  let component: ProductsWithNoDiscountComponent;
  let fixture: ComponentFixture<ProductsWithNoDiscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsWithNoDiscountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsWithNoDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
