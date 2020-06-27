import browserDetect from 'browser-detect';

import { registerApiPushape } from '../api/pushape-api';

import { InitPushapeOptions } from '../definitions/pushape';
import { InitFirebaseOptions } from '../definitions/firebase-internal';

import { initializeFirebase, initializeFirebaseServiveWorker, initializeSwListeners } from '../utils/firebase-utils';
import { askForPermissions } from '../utils/permission-utils';


export async function initPushape(
  pushapeOptions: InitPushapeOptions,
  firebaseOptions: InitFirebaseOptions,
  websiteUrl: string,
  pushEventCb = (_: Event) => undefined,
  notificationclickEventCb = (_: MessageEvent) => undefined,
  /** If set the show notification function not will be triggered. */
  pushapeEventCb?: (_: MessageEvent) => undefined,
  swPathName?: string,
) {
  const firebaseApp = initializeFirebase(firebaseOptions);

  try {
    const swRegistration = await initializeFirebaseServiveWorker(firebaseApp, pushEventCb, swPathName);
    const token = await askForPermissions(firebaseApp, websiteUrl);

    initializeSwListeners(swRegistration, notificationclickEventCb, pushapeEventCb);

    pushapeOptions.regid = token as string; // FIXME: Wrong return type from askPermissions
    pushapeOptions.platform = pushapeOptions.platform || browserDetect().name || 'not-found';

    await registerApiPushape(pushapeOptions);
  } catch (e) {
    console.error(e);

    console.log('[PushapeJS] Init Pushape failed');
  }

}

export async function initSimplePushape(
  pushapeOptions: InitPushapeOptions,
  token?: string,
) {
  try {
    pushapeOptions.regid = token || pushapeOptions.regid;
    pushapeOptions.platform = pushapeOptions.platform || browserDetect().name || 'not-found';

    await registerApiPushape(pushapeOptions);
  } catch (e) {
    console.error(e);

    console.log('[PushapeJS] Init simple Pushape failed');
  }
}