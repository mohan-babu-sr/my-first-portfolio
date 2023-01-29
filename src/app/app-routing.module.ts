import { Constants } from './app.constant';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './layout/about/about.component';
import { HomePageComponent } from './layout/home-page/home-page.component';

const routes: Routes = [
  {
    path: Constants.HOME_URL,
    component:HomePageComponent,
  },
  {
    path: Constants.ABOUT_URL,
    component:AboutComponent,
  },
  {
    path: '',
    redirectTo: Constants.HOME_URL,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
