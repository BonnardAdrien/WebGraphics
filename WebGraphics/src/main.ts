import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Chart, registerables } from 'chart.js';

import { AppRoutingModule } from './app/app.module';

Chart.register(...registerables);

platformBrowserDynamic().bootstrapModule(AppRoutingModule)
  .catch(err => console.error(err));
