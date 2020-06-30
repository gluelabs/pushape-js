import { InitPushapeOptions, RemovePushapeOptions } from '../definitions/pushape';

const pushapeUrl = 'https://gluepushape.appspot.com';

export async function registerApiPushape(options: InitPushapeOptions, retryOnError = false, retryAfter = 5000) {
  const url = `${pushapeUrl}/subscribe`;

  try {
    return await fetch(
      url,
      {
        method: 'POST',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify(options),
      });
  } catch (e) {
    if (retryOnError) {
      setTimeout(() => registerApiPushape(options, retryOnError, retryAfter), retryAfter);
    }
  }
}

export function unregisterApiPushape(options: RemovePushapeOptions) {
  const url = `${pushapeUrl}/subscribe`;

  return fetch(
    url,
    {
      method: 'DELETE',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(options),
    });
}
