import {FormBuilder, FormGroup, Validators} from "@angular/forms";

export class RegisterForm{

  form!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]]
    });
  }

}
