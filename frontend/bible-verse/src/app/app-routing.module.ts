import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerseComponent } from './verse/verse.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: VerseComponent },
  { path: 'login', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
