import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class SelectValidator {
  static optionC(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return null;
      }

      const value = control.value;

      if (value === 'c') {
        return { optionC: true };
      }

      return null;
    };
  }
}
