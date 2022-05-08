import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  { path: '',
    redirectTo: 'home',
    pathMatch: 'full'},
  {
    path: 'home',
    loadChildren: ()=>import('./pages/home/home.module').then(m=>m.HomeModule),
  },
  {
    path: 'players',
    loadChildren: ()=>import('./pages/players/list/list.module').then(m=>m.ListModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'table',
    loadChildren: ()=>import('./pages/table/list/list.module').then(m=>m.ListModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'teams',
    loadChildren: ()=>import('./pages/teams/list/list.module').then(m=>m.ListModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'matches',
    loadChildren: ()=>import('./pages/matches/list/list.module').then(m=>m.ListModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'reg',
    loadChildren: ()=>import('./pages/reg/reg.module').then(m=>m.RegModule),
  },
  {
    path: 'login',
    loadChildren: ()=>import('./pages/login/login.module').then(m=>m.LoginModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
