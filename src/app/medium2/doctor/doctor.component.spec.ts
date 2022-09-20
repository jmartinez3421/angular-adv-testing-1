import {TestBed, ComponentFixture} from '@angular/core/testing';

import {DoctorComponent} from "./doctor.component";
import {DoctorService} from "./doctor.service";
import {HttpClientModule} from "@angular/common/http";

describe('Doctor component', () => {
  let component: DoctorComponent;
  let fixture: ComponentFixture<DoctorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorComponent],
      providers: [DoctorService],
      imports: [HttpClientModule]
    });

    fixture = TestBed.createComponent(DoctorComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should return the name of the doctor', () => {

    const name = 'Javi';
    const resp = component.greetDoctor(name);

    expect(resp).toContain(name);
  });
});
