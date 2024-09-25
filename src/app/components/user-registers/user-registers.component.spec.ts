import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegistersComponent } from './user-registers.component';

describe('UserRegistersComponent', () => {
  let component: UserRegistersComponent;
  let fixture: ComponentFixture<UserRegistersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserRegistersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserRegistersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
