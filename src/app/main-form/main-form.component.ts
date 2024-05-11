import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
})
export class MainFormComponent {
  form: FormGroup;
  list: string[] = ['a', 'b', 'c'];
  errorMessage: string = '';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      primary: [
        '',
        [
          Validators.required,
          // Validators.minLength(3),
          // Validators.maxLength(6),
          Validators.min(2),
          Validators.max(10),
        ],
      ],
      secondary: [''],
      tertiary: [''],
    });
  }

  submit(): void {
    console.log(this.form.value);
  }
}
