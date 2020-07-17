import { InitPushapeOptions, RemovePushapeOptions, InitPushapeResponse } from '../definitions/pushape';

const pushapeUrl = 'https://gluepushape.appspot.com';

export async function registerApiPushape(
  options: InitPushapeOptions,
  retryOnError = false,
  retryAfter = 5000,
): Promise<InitPushapeResponse | undefined> {
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
      }).then((response) => response.json());
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
