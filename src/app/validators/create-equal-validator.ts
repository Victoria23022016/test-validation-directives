import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const createEqualValidator = <T>(
  comparingValue: T,
  errorMessageFn: (controlValue: T) => string
): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value) {
      const value = control.value;

      if (value === comparingValue) {
        return { isEqual: errorMessageFn(control.value) };
      }
    }

    return null;
  };
};
