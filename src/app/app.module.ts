import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FundamentosComponent } from './componentes/fundamentos/fundamentos.component';
import { MAINComponent } from './componentes/main/main.component';
import { AppcolaComponent } from './componentes/appcola/appcola.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FundamentosComponent,
    MAINComponent,
    AppcolaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
