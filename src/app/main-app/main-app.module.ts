import { NgModule } from '@angular/core';
import { CommonCompsModule } from '../common/common-comps.module';
import { MainAppComponent } from './main-app.component';
import { MainContentComponent } from './main-content/main-content.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonCompsModule,
    RouterModule
  ],
  declarations: [
    MainAppComponent,
    MainContentComponent
  ],
  exports: [
    MainAppComponent,
    MainContentComponent
  ]
})
export class MainAppModule {

}
