import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopbookComponent } from './shopbook.component';

describe('ShopbookComponent', () => {
  let component: ShopbookComponent;
  let fixture: ComponentFixture<ShopbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopbookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
