import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-basic-control',
  templateUrl: './basic-control.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BasicControlComponent),
      multi: true,
    },
  ],
})
export class BasicControlComponent implements ControlValueAccessor {
  @Input() label: string;
  value: string;
  errorMessage: string;

  addErrorMessage(message: string): void {
    this.errorMessage = message;
  }

  private onChange(value: string): void {}
  private onTouched(): void {}

  inputValueChange(event: Event): void {
    const targetElement = event.target as HTMLInputElement;
    const value = targetElement.value;
    this.onChange(value);
  }

  inputTouched() {
    this.onTouched();
  }

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
