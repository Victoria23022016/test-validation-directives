import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MainFormComponent } from './main-form/main-form.component';
import { BasicControlComponent } from './controls/basic-control/basic-control.component';
import { DateControlComponent } from './controls/date-control/date-control.component';
import { ErrMessageDirective } from './directives/basic-error.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectControlComponent } from './controls/select-control/select-control.component';
import { SelectErrMessageDirective } from './directives/select-error.directive';
import { RadioControlComponent } from './controls/radio-control copy/radio-control.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MainFormComponent,
    BasicControlComponent,
    DateControlComponent,
    SelectControlComponent,
    RadioControlComponent,
    ErrMessageDirective,
    SelectErrMessageDirective,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
