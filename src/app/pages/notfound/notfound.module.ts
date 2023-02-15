import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessegerComponent } from './messeger/messeger.component';



@NgModule({
  declarations: [
    MessegerComponent
  ],
  exports: [
    MessegerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NotfoundModule { }
