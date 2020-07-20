// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/6.0.4/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/6.0.4/firebase-messaging.js');

console.log('[PushapeJS - SW] Init');

firebase.initializeApp({
  appId: '1:551879783619:web:5388f6b74da513cbcb1e76',
  apiKey: 'AIzaSyBJyQPodo-7J3X1TTLTfumP0lO__gPfBGo',
  authDomain: 'on2off-dealer.web.app',
  projectId: 'on2off-glue',
  messagingSenderId: '551879783619',
});

if (firebase.messaging.isSupported()) {
  const messaging = firebase.messaging();

  /**
   * This will be triggered only if push payload will be missing notification property
   */
  messaging.setBackgroundMessageHandler((ev) => {
    console.log('[PushapeJS - SW] Handling background message', ev);
    showMessage(ev);
  });
} else {
  console.warn('[PushapeJS - SW] Firebase messaging does not supported');
}

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