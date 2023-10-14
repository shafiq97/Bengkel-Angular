import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { PrescriptionRefillFormComponent } from './prescription-refill-form/prescription-refill-form.component';

const routes: Routes = [
  { path: 'user-profile', component: ProfileComponent },
  { path: '', component: PrescriptionRefillFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
