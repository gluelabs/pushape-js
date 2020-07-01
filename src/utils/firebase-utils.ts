import 'firebase/messaging'
import firebase, { initializeApp } from 'firebase/app';

import { InitFirebaseOptions } from '../definitions/firebase-internal';

export function initializeFirebase(options: InitFirebaseOptions) {
  const { appId, apiKey, authDomain, projectId, messagingSenderId } = options;

  try {
    const firebaseApp = initializeApp({
      appId,
      apiKey,
      authDomain,
      projectId,
      messagingSenderId,
    });

    return firebaseApp;
  } catch (e) {
    console.error('[PushapeJS] Error \n', e);

    throw new Error('[PushapeJS] Error during initialization process');
  }
}

export async function initializeFirebaseServiveWorker(
  firebaseApp: firebase.app.App,
  pushEventCb = (_: Event) => undefined,
  swPathName = 'firebase-messaging-sw.js',
) {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register(swPathName);

      if (firebase.messaging.isSupported()) {
        firebaseApp.messaging().useServiceWorker(registration);

        registration.addEventListener('push', (event) => {
          console.log('[PushapeJS] Event push', event);
          pushEventCb(event);
        });
      } else {
        console.warn('[PushapeJS] Firebase messaging not supported');
      }

      return registration;
    } catch (e) {
      throw new Error(`[PushapeJS] ${e}`);
    }
  } else {
    throw new Error('[PushapeJS] Cannot register service worker because is not supported in the browser');
  }

}

export function initializeSwListeners(
  registration: ServiceWorkerRegistration,
  notificationclickEventCb = (_: MessageEvent) => undefined,
  /** If set the show notification function not will be triggered */
  pushapeEventCb?: (_: MessageEvent) => undefined,
) {
  navigator.serviceWorker.addEventListener('message', (msg: MessageEvent) => {
    if (msg.data.event === 'pushape') {
      console.log('[PushapeJS] Event pushape \n', msg.data);

      if (pushapeEventCb) {
        pushapeEventCb(msg);
      } else {
        showNotification(registration, msg);
      }

    } else if (msg.data.event === 'notificationclick') {
      console.log('[PushapeJS] Event notificationclick \n', msg.data);

      notificationclickEventCb(msg);
    } else {
      console.warn('[PushapeJS] Unhandled Event \n', msg);
    }
  });
}

export function showNotification(registration: ServiceWorkerRegistration, msg: MessageEvent) {
  const notification = msg.data.payload.notification;
  const data = msg.data.payload.data;
  const title = notification.title;
  const options = {
    body: notification.body,
    icon: notification.icon,
    badge: notification.badge,
    vibrate: [100, 50, 100, 100, 50, 100, 100, 50, 100],
    data: {
      click_action: data.click_action
    },
    // click_action: notification.click_action,
    need_interaction: true
  };

  registration.showNotification(title, options);
}