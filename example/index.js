console.log('[PushapeJS - Example] Init');

const DEVICE_TOKEN_KEY = 'pushapejs-device-token';
const PUSHAPE_ID_KEY = 'pushapejs-pushape-id';
const PLATFORM_KEY = 'pushapejs-platform';

const uuidElement = document.getElementById('uuid');
const pushapeElement = document.getElementById('pushape-id');
const internalIdElement = document.getElementById('internal-id');
const appIdElement = document.getElementById('app-id');

const firebaseApp = PushapeJS.initializeFirebase({
  appId: '<appId>',
  apiKey: '<apiKey>',
  authDomain: '<authDomain>',
  projectId: '<firebaseProjectId>',
  messagingSenderId: '<senderId>',
});

console.log('[PushapeJS - Example] Firebase app initialize', firebaseApp);

const uuid = localStorage.getItem(DEVICE_TOKEN_KEY);
const platform = localStorage.getItem(PLATFORM_KEY);

const pushapeOptions = {
  id_app: '1162',
  internal_id: 'test-paolo',
  regid: undefined,
  uuid,
  platform,
};

let registration;
let pushapeId = localStorage.getItem(PUSHAPE_ID_KEY);

if (!pushapeOptions.uuid) {
  setUUID();
}

console.log('[PushapeJS - Example] Device token', pushapeOptions.uuid);

uuidElement.innerHTML = pushapeOptions.uuid || 'No device token found';
internalIdElement.innerHTML = pushapeOptions.internal_id || 'No internal id generated';
appIdElement.innerHTML = pushapeOptions.id_app;
pushapeElement.innerHTML = pushapeId || 'No pushape id found';

let hasNotificationEnable = PushapeJS.hasNotificationPermission();
renderNotificationElements(hasNotificationEnable);

PushapeJS.initializeFirebaseServiveWorker(firebaseApp)
  .then((r) => {
    registration = r;
    console.log('[PushapeJS - Example] Firebase service worker initialize', registration);

    if (hasNotificationEnable) {
      return askForPermissions();
    } else {
      return;
    }
  })
  .then(() => {
    renderPushapeElements(pushapeId);
    if (!pushapeId) {
      registerPushape();
    }
  });

/** Functions */
function clearPushapeId() {
  pushapeId = undefined;
  localStorage.removeItem(PUSHAPE_ID_KEY);
  pushapeElement.innerHTML = 'No pushape id found';
}

function setPushapeId(id) {
  pushapeId = id;
  localStorage.setItem(PUSHAPE_ID_KEY, id);
  pushapeElement.innerHTML = id;
}

function setPushToken(t) {
  pushapeOptions.regid = t
}

function setUUID(uuid) {
  pushapeOptions.uuid = uuid || uuidv4();
  localStorage.setItem(DEVICE_TOKEN_KEY, pushapeOptions.uuid);
  uuidElement.innerHTML = pushapeOptions.uuid || 'No device token found';
}

function setPlatform(platform) {
  pushapeOptions.platform = platform;
  localStorage.setItem(PLATFORM_KEY, platform);
}

function registerPushape() {
  console.log('[PushapeJS - Example] Registering Pushape');

  return PushapeJS.initSimplePushape(pushapeOptions).then(
    (response) => {
      console.log('[PushapeJS - Example] Pushape successfully registered');

      setPlatform(response.pushapeOptions.platform);
      setPushapeId(response.pushapeResponse.push_id);
      renderPushapeElements(response.pushapeResponse.push_id);
    },
    (e) => {
      console.warn('[PushapeJS - Example] Failed to register pushape service \n', e);
    }
  );
}

function unregisterPushape() {
  return PushapeJS.unregisterApiPushape({
    id_app: pushapeOptions.id_app,
    platform: pushapeOptions.platform,
    uuid: pushapeOptions.uuid,
  }).then(() => {
    clearPushapeId();
    renderPushapeElements();
  });
}

function askForPermissions() {
  console.log('[PushapeJS - Example] Asking for permissions');

  return PushapeJS.askForNotificationPermission(firebaseApp, 'web.it.on2off.coupon')
    .then(
      (token) => {
        setPushToken(token);

        const hasPermission = PushapeJS.hasNotificationPermission();

        renderNotificationElements(hasPermission);
        prepareServiceWorkerListeners();

        console.log('[PushapeJS - Example] Permission successfully granted \n', token);
        return token;
      },
      (e) => {
        console.warn('[PushapeJS - Example] Failed grant permission \n', e);
      }
    );
}

function prepareServiceWorkerListeners() {
  PushapeJS.initializeSwListeners(registration);
  console.log('[PushapeJS - Example] Initialize service worker listeners complete');
}

function renderNotificationElements(isEnable) {
  const notificationBtnElement = document.getElementById('notification-btn');
  const notificationInfoElement = document.getElementById('notification-info');

  if (isEnable) {
    notificationBtnElement.style.display = 'none';
    notificationInfoElement.style.display = 'block';
  } else {
    notificationBtnElement.style.display = 'block';
    notificationInfoElement.style.display = 'none';
  }
}

function renderPushapeElements(pushapeId) {
  const registerBtnElement = document.getElementById('register-btn');
  const unregisterBtnElement = document.getElementById('unregister-btn');

  if (pushapeId) {
    registerBtnElement.style.display = 'none';
    unregisterBtnElement.style.display = 'block';
  } else {
    registerBtnElement.style.display = 'block';
    unregisterBtnElement.style.display = 'none';
  }
}
