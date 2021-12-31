import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppcolaComponent } from './componentes/appcola/appcola.component';
import { VistausuarioComponent } from './componentes/appcola/componentes/vistausuario/vistausuario.component';
import { FundamentosComponent } from './componentes/fundamentos/fundamentos.component';
import { MAINComponent } from './componentes/main/main.component';

const routes: Routes = [
  {path:"",component:MAINComponent},
  {path:"fundamentos",component:FundamentosComponent},
  {path:"appcola",component:AppcolaComponent,children:[
    {path:"vistausuario",component:VistausuarioComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
