'use strict';
import type { App } from "vue";
import GApi, {
  GoogleLogin,
  CallbackTypes,
  decodeCredential,
  googleOneTap,
  googleLogout,
  googleTokenLogin,
  googleAuthCodeLogin,
  googleSdkLoaded,
} from './gapi'
import FBApi, { utils } from './fbapi'

export const FBUtils = utils
export const GUtils = {
  GoogleLogin,
  CallbackTypes,
  decodeCredential,
  googleOneTap,
  googleLogout,
  googleTokenLogin,
  googleAuthCodeLogin,
  googleSdkLoaded,
}

export default {
  install: (app: App, options) => {
    GApi.install(app, options.google)
    FBApi.install(app, options.facebook)
  }
}
