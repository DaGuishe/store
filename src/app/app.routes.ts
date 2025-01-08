import { Routes } from '@angular/router';

import { ListComponent } from './domains/products/pages/list/list.component';
import { ProductDetailComponent } from './domains/products/pages/product-detail/product-detail.component';
import { LayoutComponent } from './domains/shared/components/layout/layout.component';
import { AboutComponent } from './domains/info/pages/about/about.component';
import { NotFoundComponent } from './domains/info/pages/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    data: { hostAttr: 'layout-component' },
    children: [
      {
        path: '',
        component: ListComponent,
        data: { hostAttr: 'list-component' }
      },
      {
        path: 'about',
        component: AboutComponent,
        data: { hostAttr: 'about-component' }
      },
      {
        path: 'product/:id',
        component: ProductDetailComponent,
        data: { hostAttr: 'product-detail-component' }
      }
    ]
  },

  {
    path: '**',
    component: NotFoundComponent,
    data: { hostAttr: 'not-found-component' }
  }
];
