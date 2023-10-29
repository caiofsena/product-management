import remoteConfig from '@react-native-firebase/remote-config';


export async function initFirebase() {
  await remoteConfig().fetch(60);
  remoteConfig()
  .setDefaults({})
  .then(() => remoteConfig().fetchAndActivate())
  .then(fetchedRemotely => {
    if (fetchedRemotely) {
      console.log('Configs were retrieved from the backend and activated.');
    } else {
      console.log(
        'No configs were fetched from the backend, and the local configs were already activated',
        );
      }
  });
}