import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [
    SidebarComponent
  ],
  exports: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule /* Volvemos a cargar el módulo en el module.ts del componente correspondiente par apoder hacer uso de las directivas "routerLink", en este caso en el shared.module (sirebar) */
  ]
})
export class SharedModule { }
