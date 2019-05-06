// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey:       'AIzaSyARpKxFoOgXqfyvSDVX1bppZc4mkMX7jRs',
    authDomain:   'https://console.firebase.google.com/u/0/project/slack-e932f/authentication/users',
    databaseURL:  'https://console.firebase.google.com/u/0/project/slack-e932f/database',
    projectId:    'slack-e932f',
    storageBucket: 'https://console.firebase.google.com/u/0/project/slack-e932f/storage',
    messagingSenderId: '488133859748s'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
