import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {SidebarComponent} from './sidebar/sidebar.component';
import {GithubComponent} from './github.component';
import {GithubRoutingModule} from './github-routing.module';
import {GithubProfilesComponent} from './github-profiles/github-profiles.component';
import {MainComponent} from './main/main.component';
import {UserDetailsComponent} from './github-profiles/user-modal/user-details/user-details.component';
import {UserModalComponent} from './github-profiles/user-modal/user-modal.component';

import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {SharedModule} from '../shared/shared.module';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { SearchComponent } from './github-profiles/search/search.component';


@NgModule({
  declarations: [
    GithubComponent,
    MainComponent,
    SidebarComponent,
    GithubProfilesComponent,
    UserDetailsComponent,
    UserModalComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    GithubRoutingModule,
    TableModule,
    DialogModule,
    ProgressSpinnerModule,
    SharedModule
  ],
  exports: [

  ],
  providers: []
})

export class GithubModule {}
