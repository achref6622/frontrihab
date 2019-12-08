import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RensignementRoutingModule } from './rensignement-routing.module';
import { RensignementComponent } from './rensignement/rensignement.component';
import { RensignementAddComponent } from './rensignement-add/rensignement-add.component';
import { RensignementUpdateComponent } from './rensignement-update/rensignement-update.component';

@NgModule({
  declarations: [RensignementComponent, RensignementAddComponent,  RensignementUpdateComponent],
  imports: [
    CommonModule,
    RensignementRoutingModule ,


  ]
})
export class RensignementModule { }
