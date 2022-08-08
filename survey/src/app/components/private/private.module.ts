import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateComponent } from './private/private.component';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { SettingComponent } from './setting/setting.component';
import { StatComponent } from './stat/stat.component';

const routes: Routes = [
  {
    path: 'private', component: PrivateComponent, children: [
      { path: 'profile', component:  ProfileComponent},
      { path: 'setting', component:  SettingComponent},
      { path: 'stat', component:  StatComponent}
    ]
  },
];

@NgModule({
  declarations: [
    PrivateComponent,
    ProfileComponent,
    SettingComponent,
    StatComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PrivateModule { }
