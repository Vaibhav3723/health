import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { LogoComponent } from './logo/logo.component';
import { HeaderComponent } from './header/header.component';
import { SideDrawerComponent } from './sidedrawer/sidedrawer.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    HeaderComponent,
    LogoComponent,
    SideDrawerComponent,
    SearchbarComponent,
    ModalComponent
  ],
  exports: [
    HeaderComponent,
    LogoComponent,
    SideDrawerComponent,
    SearchbarComponent,
    ModalComponent
  ]
})
export class CommonCompsModule {

}
