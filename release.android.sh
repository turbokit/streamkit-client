APP_NAME="streamkit.apk";
UNSIGNED_APK_PATH="platforms/android/build/outputs/apk/android-release-unsigned.apk";

tput setaf 2;
echo "@ Preparing Android release...";

tput sgr0;

if test -z "$1"
then
  tput setaf 2;
  echo "@ Skipping build...";
  tput sgr0;
else
  tput setaf 2;
  echo "@ Bundling and optimizing...";
  tput sgr0;

  ionic build android --prod --release;
fi

rm -rf $APP_NAME;

tput setaf 2;
echo "@ Signing apk...";

tput sgr0;

jarsigner -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore $UNSIGNED_APK_PATH alias_name;

"${ANDROID_HOME}build-tools/25.0.2/zipalign" 4 $UNSIGNED_APK_PATH $APP_NAME
