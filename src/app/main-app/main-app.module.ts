import { NgModule } from '@angular/core';
import { CommonCompsModule } from '../common/common-comps.module';
import { MainAppComponent } from './main-app.component';

@NgModule({
  imports: [
    CommonCompsModule
  ],
  declarations: [
    MainAppComponent
  ],
  exports: [
    MainAppComponent
  ]
})
export class MainAppModule {

}
