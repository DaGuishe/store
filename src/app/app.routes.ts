import { Routes } from '@angular/router';

import { ListComponent } from './domains/products/pages/list/list.component';
import { AboutComponent } from './domains/info/pages/about/about.component';

export const routes: Routes = [
  {
    path: '',
    component: ListComponent,
    data: { hostAttr: 'list-component' }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { hostAttr: 'about-component' }
  }
];
