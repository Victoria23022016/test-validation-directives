import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

export const createInvalidDateValidator = (
  minDateValue: string,
  minDateErrorMessage: (controlValue: string) => string,
  maxDateErrorMessage: (controlValue: string) => string
): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value) {
      const value = new Date(control.value);
      value.setHours(0, 0, 0, 0);

      const minDate = new Date(minDateValue);
      minDate.setHours(0, 0, 0, 0);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (value < minDate) {
        return {
          lessThanMinDate: minDateErrorMessage(control.value),
        };
      }

      if (value > today) {
        return {
          moreThanMaxDate: maxDateErrorMessage(control.value),
        };
      }
    }

    return null;
  };
};
