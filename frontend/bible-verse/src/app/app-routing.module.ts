import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerseComponent } from './verse/verse.component';
import { LoginComponent } from './login/login.component';
import { PillTrackerComponent } from './pill-tracker/pill-tracker.component';
import { RouteGuardService } from './service/route-guard.service';

const routes: Routes = [
  { path: '', component: VerseComponent },
  { path: 'login', component: LoginComponent },
  { path: 'trackPill', component: PillTrackerComponent, canActivate: [RouteGuardService]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
