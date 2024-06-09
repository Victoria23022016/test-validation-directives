import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

export function CreditCardValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value) {
    }

    return null;
  };
}
