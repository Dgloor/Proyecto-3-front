import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { PetProfileComponent } from './pet-profile/pet-profile.component';
import { OwnerProfileComponent } from './owner-profile/owner-profile.component';

const routes: Routes = [
  { path: 'posts', component: PostsComponent },
  { path: 'pet-profile', component: PetProfileComponent },
  { path: 'owner-profile', component: OwnerProfileComponent },
  { path: '**', redirectTo: 'posts' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
