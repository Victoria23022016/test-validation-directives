import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

export const createOverAgeValidator = (
  maxAge: number,
  errorMessage: (controlValue: string) => string
): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value) {
      const value = new Date(control.value);
      value.setHours(0, 0, 0, 0);
      const today = new Date();

      const minDate = new Date();
      minDate.setFullYear(today.getFullYear() - maxAge);
      minDate.setHours(0, 0, 0, 0);

      if (value <= minDate) {
        return { overAge: errorMessage(control.value) };
      }
    }

    return null;
  };
};
