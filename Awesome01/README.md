# Awesome01

Awesome01 is a React Native (TypeScript) app created with the React Native CLI. This repository contains the native projects for Android and iOS and the app source in the project root.

## Quick start

1. Install dependencies:

```bash
# npm
npm install

# or yarn
yarn install
```

2. Start Metro (JS bundler):

```bash
npm start
# or
yarn start
```

3. Run on a device or emulator/simulator:

```bash
# Android
npm run android

# iOS (requires CocoaPods)
npm run ios
```

If you need to install or update CocoaPods for iOS:

```bash
bundle install
bundle exec pod install --project-directory=ios
```

## Project structure

- `App.tsx` — app entry and root component
- `index.js` — app registration for the native runtime
- `android/`, `ios/` — native projects
- `__tests__/` — Jest tests
- `tsconfig.json` — TypeScript configuration

## Tests

Run unit tests with:

```bash
npm test
# or
yarn test
```

## Notes

- Fast Refresh is enabled during development; save files to see updates in the running app.
- Open the native projects in Android Studio or Xcode for platform-specific debugging.
