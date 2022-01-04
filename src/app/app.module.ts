import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FundamentosComponent } from './componentes/fundamentos/fundamentos.component';
import { MAINComponent } from './componentes/main/main.component';
import { AppcolaComponent } from './componentes/appcola/appcola.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { VistausuarioComponent } from './componentes/appcola/componentes/vistausuario/vistausuario.component';

@NgModule({
  declarations: [
    AppComponent,
    FundamentosComponent,
    MAINComponent,
    AppcolaComponent,
    VistausuarioComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
