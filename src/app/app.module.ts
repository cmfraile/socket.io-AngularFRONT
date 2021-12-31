import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FundamentosComponent } from './componentes/fundamentos/fundamentos.component';
import { MAINComponent } from './componentes/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    FundamentosComponent,
    MAINComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
