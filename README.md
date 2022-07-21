## Poc Capacitor

Testing Capacitor's limits  
Find out how to handle pre-built apps  
import data packets  
export data packets 

Tech : Capacitor + ViteJS + Svelte + Scss

## Installation
```sh
npm install
npm install @capacitor/android
npx cap add android
npm i @capacitor-community/electron
npx cap add @capacitor-community/electron
```

add in AndroidManifest.xml
```sh
  <uses-permission android:name="android.permission.INTERNET" />
  <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
  <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
```

## Dev Browser
To develop in live reload on browser
```sh
npm run dev
```
open http://localhost:3000/

## Dev Electron
To develop in live reload on Windows app
```sh
npm run dev
npm run dev:electron
```

## Build Electron
To package for Windows app
```sh
npm run build:electron
```

## Dev android
```sh
npm run dev:android
```
user android studio for debug
chrome://inspect/#devices


