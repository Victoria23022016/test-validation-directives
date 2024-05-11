//Директива применяется для формирования текстов ошибок для инпутов с типом select и radio
//чтобы ее применить, на инпут контрола необходимо добавить селектор директивы + реализовать метод для отлавливания
//события emitErrorMessage

import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
import { NgControl } from '@angular/forms';
import { CustomErrorMessagesEnum } from '../enums/error-message-enum';

@Directive({
  selector: '[appSelectErrMessage]',
})
export class SelectErrMessageDirective {
  @Output() emitErrorMessage: EventEmitter<string> = new EventEmitter<string>();

  constructor(private control: NgControl) {}

  //если необходимо, чтобы сообщение "Поле обязательно для заполнения" высвечивалось до ввода данных в поле
  ngOnInit(): void {
    if (this.control.hasError('required')) {
      this.createErrorMessage();
    }
  }

  @HostListener('change') showErrors() {
    if (this.control.errors) {
      this.createErrorMessage();
    } else {
      this.emitErrorMessage.emit('');
    }
  }

  private createErrorMessage(): void {
    if (this.control.errors) {
      let message: string = '';
      const errorName =
        this.defineErrorName() as keyof typeof CustomErrorMessagesEnum;
      message = CustomErrorMessagesEnum[errorName];
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
