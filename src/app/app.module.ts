import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainAppModule } from './main-app/main-app.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MainAppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
