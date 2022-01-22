import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParaListComponent } from './para-list.component';

describe('ParaListComponent', () => {
  let component: ParaListComponent;
  let fixture: ComponentFixture<ParaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
