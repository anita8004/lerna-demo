import type { App } from "vue";
import { InstallOptions } from './types'
import { checkLoginStatus } from './utils'

export const utils = {
  checkLoginStatus
}

export default {
  install: (app: App, options: InstallOptions) => {
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");

    window.fbAsyncInit = function() {
      const FB = window.FB;
      FB.init({
        appId: options.appId,
        cookie: options.cookie || true,
        xfbml: options.xfbml || true,
        version: options.version || "v18.0",
      });
    }
  }
}