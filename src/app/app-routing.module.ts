import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Covid19DashboardComponent } from './covid19-dashboard/covid19-dashboard.component';
import { CurriculumComponent } from './curriculum/curriculum.component';

const routes: Routes = [
  { path: '', redirectTo: '/info', pathMatch: 'full' },
  { path: 'covid19', component: Covid19DashboardComponent },
  { path: 'info', component: CurriculumComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
