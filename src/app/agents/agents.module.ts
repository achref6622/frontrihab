import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentsRoutingModule } from './agents-routing.module';
import { AgentComponent } from './agent/agent.component';
import { AgentAddComponent } from './agent-add/agent-add.component';

@NgModule({
  declarations: [AgentComponent, AgentAddComponent],
  imports: [
    CommonModule,
    AgentsRoutingModule
  ]
})
export class AgentsModule { }
