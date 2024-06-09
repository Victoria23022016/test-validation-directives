import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

export function PassportDateValidator(birthday: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value) {
      const value = new Date(control.value);
      value.setHours(0, 0, 0, 0);

      const birthdate = new Date(birthday);
      const minDate = new Date(birthday);
      minDate.setFullYear(birthdate.getFullYear() + 14);
      minDate.setHours(0, 0, 0, 0);

      if (value < minDate) {
        return {
          invalidPassportDate:
            'Дата выдачи паспорта не может быть меньше, чем дата рождения + 14 лет',
        };
      }
    }

    return null;
  };
}
