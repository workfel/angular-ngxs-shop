import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedProductDetailComponent } from './selected-product-detail.component';

describe('SelectedProductDetailComponent', () => {
  let component: SelectedProductDetailComponent;
  let fixture: ComponentFixture<SelectedProductDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedProductDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
