import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DateValidator } from '../validators/date-validator';
import { SelectValidator } from '../validators/select-validator';

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
          Validators.minLength(3),
          Validators.maxLength(6),
          Validators.min(111),
          Validators.max(1000),
        ],
      ],
      secondary: ['', [Validators.required, SelectValidator.optionC()]],
      tertiary: [
        '',
        [DateValidator.maxDate(), DateValidator.minDate(), Validators.required],
      ],
      quaternary: ['', [Validators.required, SelectValidator.optionC()]],
    });
  }

  submit(): void {
    console.log(this.form.value);
  }
}
