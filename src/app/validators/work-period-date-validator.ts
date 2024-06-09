import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

export function WorkPeriodDateValidator(birthday: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value) {
      const value = new Date(control.value);
      value.setHours(0, 0, 0, 0);

      const birthdate = new Date(birthday);
      const minDate = new Date(birthday);
      minDate.setFullYear(birthdate.getFullYear() + 16);
      minDate.setHours(0, 0, 0, 0);

      if (value < minDate) {
        return {
          invalidWorkPeriodDate:
            'Дата трудоустройства не может быть меньше, чем дата рождения + 16 лет',
        };
      }
    }

    return null;
  };
}
