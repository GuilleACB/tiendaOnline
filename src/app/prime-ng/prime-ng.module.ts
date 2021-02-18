import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';


const modulsFormPrime = [ButtonModule,MenubarModule];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    modulsFormPrime
  ],
  exports :[
    modulsFormPrime
  ]
})
export class PrimeNgModule { }
