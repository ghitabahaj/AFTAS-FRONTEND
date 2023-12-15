import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentCompetitionComponent } from './component-competition/component-competition.component';
import { ComponentDashboardComponent } from './component-dashboard/component-dashboard.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { RegisterMemberComponentComponent } from './register-member-component/register-member-component.component';
import { FisheComponentComponent } from './fishe-component/fishe-component.component';



const routes: Routes = [

  {path: 'competitions', component: ComponentCompetitionComponent },
  {path: 'dashboard', component: ComponentDashboardComponent },
  {path: 'register', component: RegisterMemberComponentComponent },
  {path: 'fishes', component: FisheComponentComponent },
  {path:'home' , component: LandingpageComponent , data: { navbarVisible: false } },
  { path: "", redirectTo: "home", pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
