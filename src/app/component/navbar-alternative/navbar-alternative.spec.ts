import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarAlternative } from './navbar-alternative';

describe('NavbarAlternative', () => {
  let component: NavbarAlternative;
  let fixture: ComponentFixture<NavbarAlternative>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarAlternative]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarAlternative);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
