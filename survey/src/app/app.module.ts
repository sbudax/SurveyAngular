import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './components/auth/auth.module';
import { PrivateModule } from './components/private/private.module';
import { PublicModule } from './components/public/public.module';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ReportpageComponent } from './pages/reportpage/reportpage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ReportpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    PrivateModule,
    PublicModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
