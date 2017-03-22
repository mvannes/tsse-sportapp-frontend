import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablepreviewComponent } from './tablepreview.component';

describe('TablepreviewComponent', () => {
  let component: TablepreviewComponent;
  let fixture: ComponentFixture<TablepreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablepreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablepreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
