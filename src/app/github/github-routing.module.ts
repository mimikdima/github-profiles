import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './main/main.component';
import {GithubProfilesComponent} from './github-profiles/github-profiles.component';

const routes: Routes = [
    {path: '', component: MainComponent},
    {path: 'github-profiles', component: GithubProfilesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GithubRoutingModule {}
