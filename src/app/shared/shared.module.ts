import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './components/navbar/navbar.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/user/login/login.component';
import { PopupLegalComponent } from './components/popup-legal/popup-legal.component';

@NgModule({
  declarations: [
    NavbarComponent,
     JumbotronComponent,
     ContactFormComponent,
     FooterComponent,
     LoginComponent,
     PopupLegalComponent
    ],
  imports: [
    CommonModule,
    PrimeNgModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    NavbarComponent,
     JumbotronComponent,
     ContactFormComponent,
     FooterComponent
  ]
})
export class SharedModule { }
