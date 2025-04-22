import { ApplicationConfig, makeEnvironmentProviders, provideZoneChangeDetection, signal } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { routes } from './app.routes';
import { MY_DATA_PROVIDER } from './contants';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),

    makeEnvironmentProviders([
      {
        provide: MY_DATA_PROVIDER,
        // "useFactory" approach makes new instance for each request even on server side
        // useFactory: () => {
        //   return { count: signal(0) };
        // },
        // "useValue" approach keeps the same instance on server so it gets shared across all requests 
        // while hydrating resets it back to initial state
        useValue: { count: signal(0) },
      },
    ])

  ]
};
