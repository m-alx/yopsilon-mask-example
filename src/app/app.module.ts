import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { YopsilonMaskModule } from 'yopsilon-mask';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, YopsilonMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
