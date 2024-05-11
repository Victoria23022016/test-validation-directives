import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-select-control',
  templateUrl: './select-control.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectControlComponent),
      multi: true,
    },
  ],
})
export class SelectControlComponent {
  @Input() label: string;
  @Input() list!: string[];
  value: string;

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
