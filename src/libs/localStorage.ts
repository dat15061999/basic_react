export const StorageKeys = {
  SESSION_TOKEN: "SESSION_TOKEN",
  APPLICATION_ID: "APPLICATION_ID",
  MOBILE_NUMBER: "MOBILE_NUMBER",
} as const;

export default function localStorage() {
  const setAuthToken = (data: string) => {
    window.localStorage.setItem(StorageKeys.APPLICATION_ID, data);
  };

  const getToken = (idToken: string) => {
    window.localStorage.getItem(idToken);
  };

  return {
    setAuthToken,
    getToken,
  };
}
