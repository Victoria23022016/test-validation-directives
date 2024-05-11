//Директива применяется для формирования текстов ошибок для инпутов с типом text, number и date
//чтобы ее применить, на инпут контрола необходимо добавить селектор директивы + реализовать метод для отлавливания
//события emitErrorMessage

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

  //если необходимо, чтобы сообщение "Поле обязательно для заполнения" высвечивалось до ввода данных в поле
  ngOnInit(): void {
    if (this.control.hasError('required')) {
      this.createErrorMessage();
    }
  }

  @HostListener('keyup') showErrors() {
    //для селекта нужен change событие
    if (this.control.errors) {
      switch (Object.keys(this.control.errors)[0]) {
        case 'minlength':
          this.createErrorMessage('minlength');
          break;
        case 'maxlength':
          this.createErrorMessage('maxlength');
          break;
        case 'min':
          this.createErrorMessage('min');
          break;
        case 'max':
          this.createErrorMessage('max');
          break;
        default:
          this.createErrorMessage();
      }
    } else {
      this.emitErrorMessage.emit('');
    }
  }

  private createErrorMessage(error?: string): void {
    if (this.control.errors) {
      let message: string = '';
      if (error === 'minlength' || error === 'maxlength') {
        const errorName =
          this.defineErrorName() as keyof typeof LengthErrorMessagesEnum;
        const symbolsNumber = this.control.errors[errorName].requiredLength;
        message = `${LengthErrorMessagesEnum[errorName]} ${symbolsNumber} символов`;
      } else if (error === 'min' || error === 'max') {
        const errorName =
          this.defineErrorName() as keyof typeof QuantityErrorMessagesEnum;
        const typeOfError = Object.keys(this.control.errors[errorName])[0];
        const symbolsNumber = this.control.errors[errorName][typeOfError];
        message = `${QuantityErrorMessagesEnum[errorName]} ${symbolsNumber}`;
      } else {
        const errorName =
          this.defineErrorName() as keyof typeof CustomErrorMessagesEnum;
        message = CustomErrorMessagesEnum[errorName];
      }
      this.emitErrorMessage.emit(message);
    }
  }

  private defineErrorName(): string | null {
    if (this.control.errors) {
      return Object.keys(this.control.errors)[0].toString();
    }
    return null;
  }
}
