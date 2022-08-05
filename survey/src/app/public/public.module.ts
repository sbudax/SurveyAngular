import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public/public.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';

const routes: Routes = [
  {
    path: 'public', component: PublicComponent, children: [
      { path: 'contact', component:  ContactComponent},
      { path: 'home', component:  HomeComponent},
      { path: 'nav', component:  NavComponent}
    ]
  },
];

@NgModule({
  declarations: [
    PublicComponent,
    ContactComponent,
    HomeComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PublicModule { }
