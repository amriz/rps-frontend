import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  { path: '', redirectTo: 'start', pathMatch: 'full'},
  { path: 'start', component: StartComponent },
  { path: 'results', component: ResultComponent },
  { path: '**', redirectTo: 'start', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
