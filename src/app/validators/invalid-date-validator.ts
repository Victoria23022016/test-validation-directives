import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

export function InvalidDateValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value) {
      const value = new Date(control.value);
      value.setHours(0, 0, 0, 0);

      const minDate = new Date('1900-01-01');
      minDate.setHours(0, 0, 0, 0);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (value < minDate) {
        return {
          lessThanMinDate: 'Дата не может быть раньше 01.01.1900',
        };
      }

      if (value > today) {
        return {
          moreThanToday: `Дата не может быть позже ${control.value}`,
        };
      }
    }

    return null;
  };
}
