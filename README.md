# test-react-native-fast-image-example

The server and React Native example taken from [DylanVann/react-native-fast-image](https://github.com/DylanVann/react-native-fast-image).

## Install

- in the server subfolder `yarn install`
- in the example subfolder `yarn install`
  - `cd ios`
  - add to the Podfile the fixes for XCode 12.5 from [this post](https://infinitbility.com/build-failed-after-update-xcode-12.5)
  - execute command `pod install`
  - back to the example subfolder
  - in one terminal execute `yarn start` which starts the React Native bundler at port 8081
  - in the second terminal execute `yarn run ios` which should build the iOS application and run it in the iOS emulator

![iOS emulator running the app](./images/screen.png)
