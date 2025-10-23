import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { CvComponent } from './cv/cv.component';
import { ManageServersComponent } from './manage-servers/manage-servers.component';
import { HomeAccountComponent } from './accounts/home-account/home-account.component';
import { DirectComponent } from './direct/direct.component';
import { InfosComponent } from './infos/infos.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

let myRoutes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'cv', component: CvComponent },
  { path: 'cv/:id', component: InfosComponent },
  { path: 'cv/add', component: AddComponent },
  { path: 'cv/:id/edit', component: EditComponent },
  { path: 'servers', component: ManageServersComponent },
  { path: 'accounts', component: HomeAccountComponent },
  { path: 'direct', component: DirectComponent },
];

export let ROUTING_PLB = RouterModule.forRoot(myRoutes);
