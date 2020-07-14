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

    return askForPermissions();
  })
  .then((t) => {
    token = t;
    console.log('[PushapeJS - Example] Permission successfully granted', token);

    PushapeJS.initializeSwListeners(registration);

    console.log('[PushapeJS - Example] Initialize service worker listeners complete');

    return registerPushape();
  })
  .then(() => {
    console.log('[PushapeJS - Example] Pushape successfully registered');
  })
  .catch((e) => {
    console.warn('[PushapeJS - Example] Failed to load example \n', e);
});

function askForPermissions() {
  console.log('[PushapeJS - Example] Asking for permissions');

  return PushapeJS.askForPermissions(firebaseApp, 'web.it.on2off.coupon')
    .then(
      (t) => {
        token = t;

        console.log('[PushapeJS - Example] Permission successfully granted \n', token);

        return t;
      },
      (e) => {
        console.warn('[PushapeJS - Example] Failed grant permission \n', e);
      }
    );
}

function registerPushape() {
  console.log('[PushapeJS - Example] Registering Pushape');

  return PushapeJS.initSimplePushape(
    {
      id_app: '1162',
      uuid,
      internal_id: 'test-paolo',
    },
    token,
  ).then(
    () => {
      console.log('[PushapeJS - Example] Pushape successfully registered');
    },
    (e) => {
      console.warn('[PushapeJS - Example] Failed to register pushape service \n', e);
    }
  );
}