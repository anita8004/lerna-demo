
export const checkLoginStatus = () => {
  return new Promise((resolve, reject) => {
    FB.getLoginStatus(({ authResponse }) => {
      if (authResponse) {
        resolve(authResponse)
      } else {
        resolve(authResponse)
      }
    });
  })
}