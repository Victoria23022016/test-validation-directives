import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

export function EmergencyPhoneNumberValidator(
  phoneNumber: string | number
): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value) {
      const mainPhoneNumber =
        typeof phoneNumber === 'number' ? phoneNumber.toString() : phoneNumber;
      const value =
        typeof control.value === 'number'
          ? control.value.toString()
          : control.value;

      if (value === mainPhoneNumber) {
        return {
          invalidEmergencyNumber:
            'Номер не может совпадать с основным контактным номером',
        };
      }
    }

    return null;
  };
}
