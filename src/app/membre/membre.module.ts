import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembreRoutingModule } from './membre-routing.module';
import { MembreComponent } from './membre/membre.component';
import { MembreAddComponent } from './membre-add/membre-add.component';
import { MembreUpdateComponent } from './membre-update/membre-update.component';

@NgModule({
  declarations: [MembreComponent, MembreAddComponent, MembreUpdateComponent],
  imports: [
    CommonModule,
    MembreRoutingModule
  ]
})
export class MembreModule { }
