import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RensignementComponent } from './rensignement/rensignement.component';
import { RensignementAddComponent } from './rensignement-add/rensignement-add.component';
import { RensignementUpdateComponent } from './rensignement-update/rensignement-update.component';
const routes: Routes = [
{
        path: 'reunion',
        component: RensignementComponent,
        children: [
            {
                path: 'add',
                component: RensignementAddComponent
            },
   {
                path: 'update',
                component: RensignementUpdateComponent
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RensignementRoutingModule { }
