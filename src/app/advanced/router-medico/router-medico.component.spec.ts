import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterMedicoComponent } from './router-medico.component';
import {ActivatedRoute, Router} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import {EMPTY, Observable, Subject} from "rxjs";

class FakeRouter {
  navigate( params: any ){}
}

class FakeActivatedRoute{
  // params: Observable<any> = EMPTY;
  private subject = new Subject();

  push(value: any){
    this.subject.next(value);
  }

  get params(){
    return this.subject.asObservable();
  }
}

describe('RouterMedicoComponent', () => {
  let component: RouterMedicoComponent;
  let fixture: ComponentFixture<RouterMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterMedicoComponent ],
      providers: [
        {provide: ActivatedRoute, useClass: FakeActivatedRoute},
        {provide: Router, useClass: FakeRouter}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouterMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect to Medico when it saves', () => {
    const router = TestBed.inject(Router);
    const spy = spyOn(router, 'navigate');

    component.saveMedico();

    expect(spy).toHaveBeenCalledWith(['medico', '123']);
  });

  it('should put the id = new', () => {
    const activatedRoute: FakeActivatedRoute = TestBed.inject<FakeActivatedRoute>(ActivatedRoute as any);
    activatedRoute.push({id: 'new'});

    expect(component.id).toBe('new');
  });
});
