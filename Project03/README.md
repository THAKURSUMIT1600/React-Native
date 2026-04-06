# Project03 - React Native UI Components Demo

A React Native application built with TypeScript that demonstrates basic UI components and theme switching functionality.

## Features

- **Theme Toggle**: Dark/light mode switching with SVG-based toggle button
- **Card Components**: Flat and elevated card layouts
- **Horizontal Scrolling**: Elevated cards in horizontal scroll view
- **Image Display**: Network image loading in cards
- **Contact List**: Simple contact items with profile images
- **Interactive Elements**: Pressable buttons with external link handling

## Technologies Used

- React Native 0.83.1
- React 19.2.0
- TypeScript
- React Native SVG
- React Native Safe Area Context

## Getting Started

### Prerequisites
- Node.js >= 20
- React Native development environment

### Installation
```sh
npm install
```

### Running
```sh
npm start
npm run android  # or npm run ios
```

## Project Structure

```
Project03/
├── App.tsx          # Main app with components
├── ThemeContext.tsx # Theme provider
├── package.json
├── android/
├── ios/
└── README.md
```

## Available Scripts
- `npm start` - Start Metro dev server
- `npm run android` - Run on Android
- `npm run ios` - Run on iOS
- `npm run lint` - Run ESLint
- `npm test` - Run tests
