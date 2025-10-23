import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { CvComponent } from './cv/cv.component';
import { ManageServersComponent } from './manage-servers/manage-servers.component';
import { HomeAccountComponent } from './accounts/home-account/home-account.component';
import { DirectComponent } from './direct/direct.component';

let myRoutes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'cv', component: CvComponent },
  { path: 'servers', component: ManageServersComponent },
  { path: 'accounts', component: HomeAccountComponent },
  { path: 'direct', component: DirectComponent },
];

export let ROUTING_PLB = RouterModule.forRoot(myRoutes);
