import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {HomeModule} from './home/home.module';

import {routes} from './routes';

import {AppComponent} from './app.component';
import {BreadcrumbsComponent} from './breadcrumbs/breadcrumbs.component';

@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {useHash: true}),

    HomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
