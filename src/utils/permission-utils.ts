import browserDetect from 'browser-detect';
import firbase from 'firebase/app';

export async function askForPermissions(firebaseApp: firbase.app.App, websiteUrl: string) {
  const browser = browserDetect().name;

  if (browser === 'safari') {
    return checkSafariRemotePermission(websiteUrl);
  }

  const message = firebaseApp.messaging();
  const token = await message.getToken(); // `getToken` implicit asks for user's permissions

  return token;
}

async function checkSafariRemotePermission(websiteUrl: string) {
  const untypedWindow: any = window; // FIXME

  // TODO: Too much long and maybe not necessary
  if (!untypedWindow.safari && !untypedWindow.safari.pushNotification && untypedWindow.safari.pushNotification.permission) {
    return false;
  }

  const permissionData = untypedWindow.safari.pushNotification.permission(websiteUrl); // web.it.on2off.coupon

  if (permissionData.permission === 'default') {
    // This is a new web service URL and its validity is unknown.
    await untypedWindow.safari.pushNotification.requestPermission(
      'https://apple1-dot-gluepushape.appspot.com', // The web service URL.
      websiteUrl, // The Website Push ID.
      {}, // Data that you choose to send to your server to help you identify the user.
      () => {
        // TODO: Why? computeteSafariResponse(e);
        return false;
      }
    );
  }
  else {
    return computeteSafariResponse(permissionData);
  }
}

// FIXME: Improve type with some standard
function computeteSafariResponse(permissionData: { permission: 'denied' | 'granted' | 'default', deviceToken: string }) {
  if (permissionData.permission === 'denied') {
    // The user said no.
    return undefined;
  } else if (permissionData.permission === 'granted') {
    // The web service URL is a valid push provider, and the user said yes.
    // permissionData.deviceToken is now available to use.
    return permissionData.deviceToken;
  } else {
    return undefined;
  }
}
