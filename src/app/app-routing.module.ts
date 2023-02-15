import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './pages/albums/albums.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  { path: '', component: UsersComponent },
  {
    path: 'user/:userId',
    children: [
      { path: '', component: AlbumsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
