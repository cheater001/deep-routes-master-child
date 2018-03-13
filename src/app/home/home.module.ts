import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {ListComponent} from './list/list.component';
import {HomeComponent} from './home/home.component';
import {ItemComponent} from './item/item.component';
import {ItemDetailsComponent} from './item-details/item-details.component';
import {ItemHistoryComponent} from './item-history/item-history.component';
import { ItemTemplatesComponent } from './item-templates/item-templates.component';

const ROUTES: Routes = [
  {
    // admin -> organization
    path: 'home',
    data: {breadcrumb: 'home'},
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list'
      },
      {
        path: 'list',
        data: {breadcrumb: 'list'},
        children: [
          {
            path: '',
            component: ListComponent,
            data: {breadcrumb: ''},
          },
          {
            path: ':id',
            data: {breadcrumb: 'id'},
            children: [
              {
                path: '',
                component: ItemDetailsComponent,
                data: {breadcrumb: 'empty'},
              },
              {
                path: 'history',
                component: ItemHistoryComponent,
                data: {breadcrumb: 'history1'},
              },
              {
                path: 'templates',
                component: ItemTemplatesComponent,
                data: {breadcrumb: 'templates'},
              },
            ]
          }
        ],
      }
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
  ],
  declarations: [ListComponent, HomeComponent, ItemComponent, ItemDetailsComponent, ItemHistoryComponent, ItemTemplatesComponent]
})
export class HomeModule {
}
