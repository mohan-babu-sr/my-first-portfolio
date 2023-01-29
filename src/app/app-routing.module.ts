import { Constants } from './app.constant';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './layout/about/about.component';

const routes: Routes = [
  {
    path: Constants.ABOUT_URL,
    component:AboutComponent,
  },
  {
    path: '',
    redirectTo: Constants.BASE_URL,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
