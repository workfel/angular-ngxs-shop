import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterProductItemComponent } from './filter-product-item.component';

describe('FilterProductItemComponent', () => {
  let component: FilterProductItemComponent;
  let fixture: ComponentFixture<FilterProductItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterProductItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterProductItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
