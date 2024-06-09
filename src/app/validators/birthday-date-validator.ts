import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

export function BirthdayDateValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value) {
      const value = new Date(control.value);
      value.setHours(0, 0, 0, 0);
      const today = new Date();

      const minDate = new Date();
      minDate.setFullYear(today.getFullYear() - 90);
      minDate.setHours(0, 0, 0, 0);

      const maxDate = new Date();
      maxDate.setFullYear(today.getFullYear() - 18);
      maxDate.setHours(0, 0, 0, 0);

      if (value <= minDate) {
        return { over90Years: 'Возраст не может быть старше 90 лет' };
      }

      if (value > maxDate) {
        return { under18Years: 'Возраст не может быть младше 18 лет' };
      }
    }

    return null;
  };
}
