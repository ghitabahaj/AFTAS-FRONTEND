import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentDashboardComponent } from './component-dashboard/component-dashboard.component';
import { ComponentCompetitionComponent } from './component-competition/component-competition.component';
import { ComponentMemberComponent } from './component-member/component-member.component';
import { ComponentFishComponent } from './component-fish/component-fish.component';
import { ComponentLevelComponent } from './component-level/component-level.component';
import { ComponentNavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { RegisterMemberComponentComponent } from './register-member-component/register-member-component.component';
import { FisheComponentComponent } from './fishe-component/fishe-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
  declarations: [
    AppComponent,
    ComponentDashboardComponent,
    ComponentCompetitionComponent,
    ComponentMemberComponent,
    ComponentFishComponent,
    ComponentLevelComponent,
    ComponentNavbarComponent,
    LandingpageComponent,
    RegisterMemberComponentComponent,
    FisheComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    BrowserAnimationsModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
