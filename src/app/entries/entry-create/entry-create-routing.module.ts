import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntryCreateComponent } from './entry-create.component';


const routes: Routes = [
  {
    path: '',
    component: EntryCreateComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntryCreateRoutingModule { }
