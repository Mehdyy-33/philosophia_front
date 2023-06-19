import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MouvementComponent } from './modules/mouvement/feature/mouvement.component';

const routes: Routes = [
  { path: 'mouvement', component: MouvementComponent },
  { path: 'thinker', component: MouvementComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
