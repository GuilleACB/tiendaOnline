import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PrimeNgModule } from './prime-ng/prime-ng.module';

import { environment } from 'src/environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import {ContactMessageService} from './service/contact-message.service';
import { WebLayoutComponent } from './layout/web-layout/web-layout.component';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';






@NgModule({
  declarations: [
    AppComponent,
    WebLayoutComponent,
    DashboardLayoutComponent

  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SharedModule,
    PrimeNgModule
  ],
  providers: [
     AngularFireAuth,
     ContactMessageService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
