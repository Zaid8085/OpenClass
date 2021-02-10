import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCardDialogComponent } from './menu-card-dialog.component';

describe('MenuCardDialogComponent', () => {
  let component: MenuCardDialogComponent;
  let fixture: ComponentFixture<MenuCardDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuCardDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuCardDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
