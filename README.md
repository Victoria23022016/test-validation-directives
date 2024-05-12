# ValidationExample

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.

## General information
Проект сделан с целью создания переиспользуемого экземпляра директив для обработки и предоставления сообщений с ошибками валидации для кастомного контрола.
В рамках проекта сделано две директивы: 
- basic-error.directive.ts - для кастомных контролов с инпутом с типом text, number, date (прослушивает событие 'keyup');
- select-error.directive.ts - для кастомных контролов с инпутом select и radio (прослушивает событие change);

Директива применяется на инпут внутри кастомного контрола. 
Также, для проверки работы директив создана форма (main-form.component.ts) с кастомными контролами. 
  
