import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-radio-control',
  templateUrl: './radio-control.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioControlComponent),
      multi: true,
    },
  ],
})
export class RadioControlComponent {
  @Input() label: string;
  @Input() list!: string[];
  errorMessage: string;

  addErrorMessage(message: string): void {
    this.errorMessage = message;
  }

  private onChange(value: string): void {}
  private onTouched(): void {}

  inputValueChange(event: Event) {
    const targetElement = event.target as HTMLInputElement;
    const value = targetElement.value;
    this.onChange(value);
  }

  inputTouched() {
    this.onTouched();
  }

  writeValue(value: string): void {}

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
