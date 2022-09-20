import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalComponent } from './hospital.component';

describe('HospitalComponent', () => {
  let component: HospitalComponent;
  let fixture: ComponentFixture<HospitalComponent>;

  /*beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });*/

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalComponent ]
    });

    fixture = TestBed.createComponent(HospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an HospitalComponent', () => {
    expect(component).toBeTruthy();
  });
});
