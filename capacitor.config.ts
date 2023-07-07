import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'hangman',
  webDir: 'build',
  server: {
    androidScheme: 'https',
    // url: "https://hatzola-prototype.netlify.app"
  },
};

export default config;
