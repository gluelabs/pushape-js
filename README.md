# Pushape JS ![npm-publish](https://github.com/gluelabs/pushape-js/workflows/npm-publish/badge.svg) [![npm version](https://badge.fury.io/js/pushape-js.svg)](https://badge.fury.io/js/pushape-js)

> Project contained the library used to integrate Pushape back end in a website.

Browser support: https://caniuse.com/#feat=push-api

---

## Getting Started

### Installation

Run `npm i pushape-js`.

### How to use it

**Configure service worker**

- create a file in the project root call: `firebase-messaging-sw.js`
- copy the code below
- replace the Firebase info placeholder with yours

```JS
// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/6.0.4/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/6.0.4/firebase-messaging.js');

console.log('[PushapeJS - SW] Init');

firebase.initializeApp({
  appId: '<appId>',
  apiKey: '<apiKey>',
  authDomain: '<authDomain>',
  projectId: '<projectId>',
  messagingSenderId: '<senderId>',
});

const messaging = firebase.messaging();

/**
 * This will be triggered only if push payload will be missing notification property
 */
messaging.setBackgroundMessageHandler((ev) => {
  console.log('[PushapeJS - SW] Handling background message', ev);
  showMessage(ev);
});

self.addEventListener('push', function (event) {
  console.log('[PushapeJS - SW] Receive push event', event);
})

self.addEventListener('notificationclick', function (event) {
  console.log('[PushapeJS - SW] Click on notification', event);

  event.notification.close();

  // This looks to see if the current is already open and focuses if it is
  event.waitUntil(clients.matchAll({
    type: 'window',
  }).then(function (clientList) {
    for (let i = 0; i < clientList.length; i++) {
      const client = clientList[i];
      if (client.url == '/' && 'focus' in client) {
        return client.focus();
      }
    }

    if (clients.openWindow) {
      return clients.openWindow('/');
    }
  }));
});

/**
 *
 * @param {PushEvent} payload
 */
const showMessage = function (payload) {
  console.log('[PushapeJS - SW] Handling  message', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon,
    image: payload.notification.image,
    click_action: payload.notification.click_action,
    data: payload.notification.data,
    need_interaction: true,
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
}
```

**Use lib**

Use in Vanilla JS:

In `index.html`:

```HTML
<html>
  <body>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/uuid/8.2.0/uuidv4.min.js"></script>
    <script src="./node_modules/pushape-js/pushape-js.js"></script>
    <script src="index.js"></script>
  </body>
  </body>
</html>
```

In `index.js`:

```JS
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

PushapeJS.initializeFirebaseServiveWorker(firebaseApp)
  .then((r) => {
    registration = r;
    return PushapeJS.askForPermissions(firebaseApp, '');
  })
  .then((t) => {
    token = t;

    PushapeJS.initializeSwListeners(registration);
    PushapeJS.initSimplePushape(
      {
        id_app: '',
        uuid,
        internal_id: 'test',
      },
      token,
    );
  });
```

### Test notification

We need to make a `POST` request to https://fcm.googleapis.com/fcm/send by sending a JSON in the request body.

Below is the structure of the JSON that will be sent:

```JSON
{
  "notification": {
    "title": "Firebase",
    "body": "Firebase is awesome",
    "click_action": "http://localhost:3000/",
    "icon": "http://url-to-an-icon/icon.png"
  },
  "to": "<User Token>"
}
```

In the request header, we need to pass the server key of our project in Firebase and the content-type:

```
Content-Type: application/json
Authorization: key=SERVER_KEY
```

The server key is found in the project settings in the Firebase Console under the Cloud Messaging tab.

---

## API

| Function                          | Context          | Description                                                                                                                      |     |
| --------------------------------- | ---------------- | -------------------------------------------------------------------------------------------------------------------------------- | --- |
| `initializeFirebase`              | Firebase utils   | Initialize firebase app and return it. It requires Firebase's project credentials as show in examples                            |     |
| `initializeFirebaseServiveWorker` | Firebase utils   | Register service worker in the client and use it in Firebase if supported. Than it allow to listen push event                    |     |
| `initializeSwListeners`           | Firebase utils   |                                                                                                                                  |     |
| `showNotification`                | Firebase utils   |                                                                                                                                  |     |
| `askForPermissions`               | Permission utils | Check for user permission about notification and return a token to use in `registerApiPushape` function                          |     |
| `registerApiPushape`              | Pushape API      | Subscribe to the Pushape notification center. This allow to receive notifications from Pushape back end                          |     |
| `unregisterApiPushape`            | Pushape API      | Unsubscribe from Pushape notification center                                                                                     |     |
| `initPushape`                     | Pushape utils    | Wrapper for Firebase initialization process, permssions and Pushape registration. It call each method with in the right sequence |     |
| `initSimplePushape`               | Pushape utils    | Wrapper for `registerApiPushape` that provide a platform if not set from the consumer                                            |     |

---

## Build library

Run `npm run build`:

It:

- clean old files (lib and example app)
- build library from source files
- move lib in the example app

---

## Repository branch model

The project use [Gitflow](https://datasift.github.io/gitflow/IntroducingGitFlow.html) as branching model.

---

## Commit convention

The project use Angular commit convention:

- https://www.conventionalcommits.org/en/v1.0.0-beta.2/
- https://gist.github.com/stephenparish/9941e89d80e2bc58a153

This convention is enforce by some git pre-hook.

You could make a traditional commit following the syntax rules or use `npm run commit` that help you to construct the commit message in the right way.

## Reference

### Library

- https://marcobotto.com/blog/compiling-and-bundling-typescript-libraries-with-webpack/
- https://itnext.io/step-by-step-building-and-publishing-an-npm-typescript-package-44fe7164964c
- https://blog.npmjs.org/post/165769683050/publishing-what-you-mean-to-publish

### Notification

- https://medium.com/izettle-engineering/beginners-guide-to-web-push-notifications-using-service-workers-cb3474a17679
- https://medium.freecodecamp.org/how-to-add-push-notifications-to-a-web-app-with-firebase-528a702e13e1
- https://developer.apple.com/notifications/safari-push-notifications/
