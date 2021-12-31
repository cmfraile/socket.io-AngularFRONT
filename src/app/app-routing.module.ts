import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FundamentosComponent } from './componentes/fundamentos/fundamentos.component';
import { MAINComponent } from './componentes/main/main.component';

const routes: Routes = [
  {path:"",component:MAINComponent},
  {path:"fundamentos",component:FundamentosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
