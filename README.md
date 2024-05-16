#まだできてないけど開発手伝いたいっていう狂人のために
ReactNativeのインストールは[こちら](https://learn.microsoft.com/ja-jp/windows/dev-environment/javascript/react-native-for-android)
上にもあると思いますがpackage.jsonをこのように記述, `npm install`
```json
{
  "name": "takosformobile",
  "version": "0.0.1",
  "private": true,
  "scripts": {
    "android": "react-native run-android",
    "ios": "react-native run-ios",
    "lint": "eslint .",
    "start": "react-native start",
    "test": "jest"
  },
  "dependencies": {
    "@react-navigation/native": "^6.1.17",
    "@react-navigation/native-stack": "^6.9.26",
    "@react-navigation/bottom-tabs": "^6.5.20",
    "react": "18.2.0",
    "react-native": "0.74.1",
    "react-native-image-crop-picker": "^0.41.1",
    "react-native-safe-area-context": "^4.10.1",
    "react-native-screens": "^3.31.1"
  },
  "devDependencies": {
    "@babel/core": "^7.20.0",
    "@babel/preset-env": "^7.20.0",
    "@babel/runtime": "^7.20.0",
    "@react-native/babel-preset": "0.74.83",
    "@react-native/eslint-config": "0.74.83",
    "@react-native/metro-config": "0.74.83",
    "@react-native/typescript-config": "0.74.83",
    "@types/react": "^18.2.6",
    "@types/react-test-renderer": "^18.0.0",
    "babel-jest": "^29.6.3",
    "eslint": "^8.19.0",
    "jest": "^29.6.3",
    "prettier": "2.8.8",
    "react-test-renderer": "18.2.0",
    "typescript": "5.0.4"
  },
  "engines": {
    "node": ">=18"
  }
}
```