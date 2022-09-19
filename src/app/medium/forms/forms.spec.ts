import {RegisterForm} from "./forms";
import {FormBuilder} from "@angular/forms";

describe(`Forms' tests`, () => {

  let component : RegisterForm;

  beforeEach(() => {
    component = new RegisterForm( new FormBuilder() );
  });

  it('should create a form with two fields', () => {
    expect(component.form.contains('email')).toBeTruthy();
    expect(component.form.contains('password')).toBeTruthy();
  });

  it('email should be required', () => {
    const control = component.form.get('email');
    control?.setValue('');

    expect(control?.valid).toBeFalsy();
  });

  it('email should be a valid email', () => {
    const control = component.form.get('email');
    control?.setValue('test@test.com');

    expect(control?.valid).toBeTruthy();
  });
});
