import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function createPassportDateValidator(
  birthdayDate: string,
  errorMessageFn: () => string
): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value) {
      const value = new Date(control.value);
      value.setHours(0, 0, 0, 0);

      const birthdate = new Date(birthdayDate);
      const minDate = new Date(birthdayDate);
      minDate.setFullYear(birthdate.getFullYear() + 14);
      minDate.setHours(0, 0, 0, 0);

      if (value < minDate) {
        return { invalidPassportDate: errorMessageFn() };
      }
    }

    return null;
  };
}
