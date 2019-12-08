import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './templates/template/template.component';
import { AgentComponent } from './Component/agent/agent.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { RensignementModule } from './rensignement/rensignement.module';
import { MembreModule } from './membre/membre.module';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    AgentComponent,


 ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    RensignementModule,
    MembreModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
