import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
import { NgControl } from '@angular/forms';
import {
  CustomErrorMessagesEnum,
  LengthErrorMessagesEnum,
  QuantityErrorMessagesEnum,
} from '../enums/error-message-enum';

@Directive({
  selector: '[appErrMessage]',
})
export class ErrMessageDirective {
  @Output() emitErrorMessage: EventEmitter<string> = new EventEmitter<string>();

  constructor(private control: NgControl) {}

  @HostListener('keyup') showErrors() {
    if (this.control.errors) {
      console.log(this.control.errors);
      switch (Object.keys(this.control.errors)[0]) {
        case 'minlength':
          this.createLengthErrorMessage();
          break;
        case 'maxlength':
          this.createLengthErrorMessage();
          break;
        case 'min':
          this.createQuantityErrorMessage();
          break;
        case 'max':
          this.createQuantityErrorMessage();
          break;
        default:
          this.createCustomErrorMessage();
      }
    }
  }

  private createLengthErrorMessage(): void {
    if (this.control.errors) {
      let errorName =
        this.defineErrorName() as keyof typeof LengthErrorMessagesEnum;
      let symbolsNumber = this.control.errors[errorName].requiredLength;
      let message = `${LengthErrorMessagesEnum[errorName]} ${symbolsNumber} символов`;
      this.emitErrorMessage.emit(message);
    }
  }

  private createQuantityErrorMessage(): void {
    if (this.control.errors) {
      let errorName =
        this.defineErrorName() as keyof typeof QuantityErrorMessagesEnum;
      let typeOfError = Object.keys(this.control.errors[errorName])[0];
      let symbolsNumber = this.control.errors[errorName][typeOfError];
      let message = `${QuantityErrorMessagesEnum[errorName]} ${symbolsNumber}`;
      this.emitErrorMessage.emit(message);
    }
  }

  private createCustomErrorMessage(): void {
    if (this.control.errors) {
      let errorName =
        this.defineErrorName() as keyof typeof CustomErrorMessagesEnum;
      let message = CustomErrorMessagesEnum[errorName];
      this.emitErrorMessage.emit(message);
    }
  }

  private defineErrorName(): string | null {
    if (this.control.errors) {
      return Object.keys(this.control.errors).toString();
    }
    return null;
  }

  //перезагрузка функции?
}
