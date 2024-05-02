# Kamoa

>**Note**: Instructions how to run app.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Congratulations! :tada:

You've successfully run the Kamoa App. :partying_face:

## Run tests

```bash
# using npm
npm test

# OR using Yarn
yarn test
```

## Implementation

There are just two pages in the app, upload page and home page.

The upload page consists screens guiding to statements upload and explains and requests permissions required for the app.
So basically had put the screens into their own files (following SOLID principles) and put a swiper that will just give it a nice swiping animation when user is progressing through the screen, the app also does validation on the second screen to make sure user has provided the requirements before proceeding to last screen.

The primary action buttons are basically for progressing and on last page, it takes them to main home screen with accepted status message, the smaller action basically takes user to home page with a denied/rejected status message.

The home page does not do much but just displaying the status of whether user has uploaded statements and accepted permissions or not. It also provides a button that can take user back to the upload page.

The navigation between pages is done by replacing the current page with the new page in the navigation stack, this is mainly to avoid going back through all the pages layers in the navigation stack when user presses the back button, so when user presses back button, they will just be exiting the app instead of going through the entire stack before exiting.
