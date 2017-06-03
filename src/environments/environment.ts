// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBx5_EW2GC-R3pu4bCjBrpTo1Y5Ih_eqZc",
    authDomain: "angulargame.firebaseapp.com",
    databaseURL: "https://angulargame.firebaseio.com",
    projectId: "angulargame",
    storageBucket: "angulargame.appspot.com",
    messagingSenderId: "409420470212"
  }
};
