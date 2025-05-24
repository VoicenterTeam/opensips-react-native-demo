# React Native App Setup Guide (for Android)

Welcome! This guide will help you set up and run this **already-initialized** React Native project (from GitHub) on your Windows or macOS computer for Android development.

---

## ✅ Prerequisites

Before we begin, make sure you have the following installed:

### 1. **Node.js**

* Download and install from: [https://nodejs.org](https://nodejs.org)
* After install, open a terminal or command prompt and run:

```bash
node -v
npm -v
```

You should see version numbers if it worked.

### 2. **Java Development Kit (JDK)**

*R eact Native also requires Java SE Development Kit (JDK), which can be installed using Chocolatey.

* Open an Administrator Command Prompt (right click Command Prompt and select "Run as Administrator"), then run the following command:

```bash
choco install -y microsoft-openjdk17
```

* If you have already installed Node on your system, make sure it is Node 18 or newer. If you already have a JDK on your system, we recommend JDK17. You may encounter problems using higher JDK versions.

### 3. **Android Studio**

* Download from: [https://developer.android.com/studio](https://developer.android.com/studio)
* During installation, select these:

  * Android SDK
  * Android SDK Platform
  * Android Virtual Device (AVD)

### 4. **React Native CLI**

> Note: This guide is for React Native **CLI**, not **Expo**.

Install it globally:

```bash
npm install -g react-native-cli
```

---

## 🚀 How to Set Up and Run the Project (Android)

### Step 1: Clone the project from GitHub

Open a terminal or command prompt and run:

```bash
git clone https://github.com/VoicenterTeam/opensips-react-native-demo.git
cd opensips-react-native-demo
```

Replace the GitHub link with your actual repo URL.

### Step 2: Install dependencies

Inside the project folder, run:

```bash
yarn
```
or
```bash
npm install
```


This will install all required packages listed in `package.json`.

### Step 3: Set up Android environment variables (Windows only)

Add the following to your environment variables:

* **ANDROID\_HOME** = `C:\Users\YourName\AppData\Local\Android\Sdk`
* Add these to your **System PATH**:

  * `%ANDROID_HOME%\emulator`
  * `%ANDROID_HOME%\tools`
  * `%ANDROID_HOME%\tools\bin`
  * `%ANDROID_HOME%\platform-tools`

On macOS, this step is usually handled automatically by Android Studio.

### Step 4: Start Android emulator or connect a device

* Open Android Studio
* Go to **Tools > Device Manager**
* Launch a virtual device (or connect your Android phone with USB debugging enabled)

### Step 5: Run the app on Android (via Terminal)

In the terminal (inside the project folder), run:

```bash
yarn run android
```
or

```bash
npx react-native run-android
```

This will build and install the app on your emulator or connected device.

### ✅ Alternative: Run the App from Android Studio

If you prefer using the graphical interface of Android Studio:

1.In the terminal (inside the project folder), run:
```bash
yarn start
```
or
```bash
npx react-native start
```
2. Open Android Studio
3. Click **File > Open** and select the `android` folder from the cloned project
4. Wait for the Gradle sync to complete (may take a few minutes)
5. On the top toolbar, select a running device or emulator
6. Click the green "Run" ▶️ button (or press **Shift + F10**)

This will build and run the app using Android Studio.

---

## 🛠 Common Fixes

### "SDK location not found"

Ensure `ANDROID_HOME` is set correctly and tools are added to your system PATH.

### "Could not connect to development server"

* Try running `npx react-native start` in a new terminal.
* Make sure the emulator or your phone is connected and recognized.

---

## 🔄 Helpful Commands

* Start Metro bundler: `yarn start`
* Clean Android build: `cd android && gradlew clean` (Windows) or `./gradlew clean` (macOS/Linux)
* Re-run the app: `yarn run android`

---

## 📦 How to Build an APK (Android Installer)

You can generate a standalone APK file to install manually or share with others:

### Step 1: Go to the Android directory

```bash
cd android
```

### Step 2: Build the APK

```bash
./gradlew assembleRelease   # for macOS/Linux
```

```bash
gradlew assembleRelease     # for Windows
```

This may take a few minutes. When it's done, your APK file will be here:

```
android/app/build/outputs/apk/release/app-release.apk
```

You can now copy that file to your Android device or share it with others.

> Note: To avoid errors, make sure you’ve set up signing configs or comment out the `signingConfig` in `android/app/build.gradle` if you're just testing.

---

## 🎉 Done!

If everything is set up correctly, you should now see the app running on your Android device.

If you have any issues, check the [React Native documentation](https://reactnative.dev/docs/environment-setup) or search online using the error message.
