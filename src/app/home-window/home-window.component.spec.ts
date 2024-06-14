import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWindowComponent } from './home-window.component';

describe('HomeWindowComponent', () => {
  let component: HomeWindowComponent;
  let fixture: ComponentFixture<HomeWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeWindowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
