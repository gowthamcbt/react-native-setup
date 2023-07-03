build apk

step 1:

npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res

step 2:


rm -rf ./android/app/src/main/res/drawable-*

rm -rf ./android/app/src/mainmain/res/raw


 cd android && ./gradlew assembleRelease


 cd android && ./gradlew clean

<b>Clear watchman watches:</b>
 watchman watch-del-all
 
<b>Remove the cache:</b>
 rm -rf /tmp/metro-*
 
<b>Delete node_modules:</b>
 rm -rf node_modules
 
<b>Install project libraries:</b>
 npm install or yarn install
 
<b>Clean & install project pods:</b>
 cd ios && rm -rf Pods Podfile.lock && pod install
 
<b>Reset Metro’s cache:</b>
 yarn start --reset-cache
 
<b>When applying new changes on Android gradle files, it deletes the build folder:</b>
 cd android && ./gradlew clean

 <b>upgrade react native</b>
 npx @rnx-kit/align-deps --requirements react-native@0.71
 npx @rnx-kit/align-deps --requirements react-native@0.71 --write
