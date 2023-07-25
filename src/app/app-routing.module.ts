import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from './crud/component/crud.component';

const routes: Routes = [{
  path: "",
  component: CrudComponent,
  children: [
    {
      path: 'crud',
      loadChildren: () => import('./crud/crud.module').then(m => m.CrudModule)
    },

  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
