console.log('[PushapeJS - Example] Init');

const firebaseApp = PushapeJS.initializeFirebase({
  appId: '<appId>',
  apiKey: '<apiKey>',
  authDomain: '<authDomain>',
  projectId: '<firebaseProjectId>',
  messagingSenderId: '<senderId>',
});

let registration;
let token;
let uuid = uuidv4();

console.log('[PushapeJS - Example] Firebase app initialize', firebaseApp);

PushapeJS.initializeFirebaseServiveWorker(firebaseApp)
  .then((r) => {
    registration = r;

  console.log('[PushapeJS - Example] Firebase service worker initialize', registration);

    return PushapeJS.askForPermissions(firebaseApp, 'web.it.on2off.coupon');
  })
  .then((t) => {
    token = t;
    console.log('[PushapeJS - Example] Ask for permission complete', token);

    PushapeJS.initializeSwListeners(registration);

    console.log('[PushapeJS - Example] Initialize service worker listeners complete');

    PushapeJS.initSimplePushape(
      {
        id_app: '1162',
        uuid,
        internal_id: 'test-paolo',
      },
      token,
    );
  })
  .then(() => {

  })
  .catch((e) => {
    console.warn('[PushapeJS - Example] Failed to load example \n', e);
});

