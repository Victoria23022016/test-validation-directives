import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class DateValidator {
  static today: Date = new Date();
  static minDay: Date = new Date('1900');

  static maxDate(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return null;
      }

      const value = control.value;

      if (new Date(value) > this.today) {
        return { maxDate: true };
      }

      return null;
    };
  }

  static minDate(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return null;
      }

      const value = control.value;

      if (new Date(value) < this.minDay) {
        return { minDate: true };
      }

      return null;
    };
  }
}
