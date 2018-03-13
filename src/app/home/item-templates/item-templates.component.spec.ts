import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTemplatesComponent } from './item-templates.component';

describe('ItemTemplatesComponent', () => {
  let component: ItemTemplatesComponent;
  let fixture: ComponentFixture<ItemTemplatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemTemplatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
