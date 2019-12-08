import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgentComponent } from './agent/agent.component';
import {AgentAddComponent } from './agent-add/agent-add.component';
const routes: Routes = [
{
        path: 'agent',
        component: AgentComponent,
        children: [
            {
                path: 'add',
                component: AgentAddComponent
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentsRoutingModule { }
