import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MembreComponent } from './membre/membre.component';
import {MembreAddComponent } from './membre-add/membre-add.component';
import { MembreUpdateComponent} from './membre-update/membre-update.component';

const routes: Routes = [
{
        path: 'membre',
        component: MembreComponent,
        children: [
            {
                path: 'add',
                component: MembreAddComponent
            },
            {
                path: 'update',
                component: MembreUpdateComponent
            }
        ]
    }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembreRoutingModule { }
