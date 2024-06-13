import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { DateValidator } from '../validators/date-validator';
import { SelectValidator } from '../validators/select-validator';
import { PassportDateValidator } from '../validators/passport-date-validator';
import { WorkPeriodDateValidator } from '../validators/work-period-date-validator';
import { InvalidDateValidator } from '../validators/invalid-date-validator';
import { EmergencyPhoneNumberValidator } from '../validators/emergency-phone-number-validator';
import { createPassportDateValidator } from '../validators/create-passport-date-validator';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
})
export class MainFormComponent {
  form: FormGroup;
  list: string[] = ['a', 'b', 'c'];
  errorMessage: string = '';

  validatorPassportDate = createPassportDateValidator(
    '1992-08-08',
    () =>
      'Дата выдачи паспорта не может быть меньше, чем дата рождения + 14 лет'
  );

  constructor(private fb: FormBuilder) {}

  get primary(): AbstractControl {
    return this.form.get('primary') as AbstractControl;
  }

  get secondary(): AbstractControl {
    return this.form.get('secondary') as AbstractControl;
  }

  get tertiary(): AbstractControl {
    return this.form.get('tertiary') as AbstractControl;
  }

  get quaternary(): AbstractControl {
    return this.form.get('quaternary') as AbstractControl;
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      primary: [
        '',
        [Validators.required, EmergencyPhoneNumberValidator('89137447313')],
      ],
      secondary: ['', [Validators.required, SelectValidator.optionC()]],
      tertiary: ['', [this.validatorPassportDate]],
      quaternary: ['', [Validators.required, SelectValidator.optionC()]],
    });
  }

  submit(): void {
    console.log(this.form.value);
  }
}
