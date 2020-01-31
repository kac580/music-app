import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenresComponent } from './genres/genres.component';
import { ArtistsComponent } from './artists/artists.component';
import { AlbumsComponent } from './albums/albums.component';


const routes: Routes = [
  {path: 'genres', component: GenresComponent},
  {path: 'artists', component: ArtistsComponent},
  {path: 'albums', component: AlbumsComponent},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
