import "ts-node/register";
import { ExpoConfig } from "expo/config";

// const IS_DEV = process.env.APP_VARIANT === "development";
const IS_DEV = "development";

module.exports = ({ config }: { config: ExpoConfig }) => {
  return {
    expo: {
      name: IS_DEV ? "Art Museum (Dev)" : "Art Museum",
      slug: "appjs24-workflows-workshop-code",
      version: "1.0.0",
      orientation: "portrait",
      icon: "./assets/images/icon.png",
      scheme: "myapp",
      userInterfaceStyle: "automatic",
      splash: {
        image: "./assets/images/splash.png",
        resizeMode: "contain",
        backgroundColor: "#ffffff",
      },
      assetBundlePatterns: ["**/*"],
      ios: {
        supportsTablet: true,
        bundleIdentifier:
          "com.expo.appjs24-workflows-workshop-code" + (IS_DEV ? "-dev" : ""),
      },
      android: {
        adaptiveIcon: {
          foregroundImage: "./assets/images/adaptive-icon.png",
          backgroundColor: "#ffffff",
        },
        package: "com.expo.appjs24workflowsworkshopcode" + (IS_DEV ? "dev" : ""),
      },
      web: {
        bundler: "metro",
        favicon: "./assets/images/favicon.png",
      },
      plugins: [
        ["expo-router"],
        [
          "expo-quick-actions",
          {
            androidIcons: {
              fav_icon: {
                foregroundImage: "./assets/images/adaptive-icon.png",
                backgroundColor: "#29cfc1",
              },
            },
            iosIcons: {
              fav_icon: "./assets/images/fav.png",
            },
          },
        ],
        ["./plugins/withWidget.ts"],
      ],
      experiments: {
        typedRoutes: true,
      },
      runtimeVersion: {
        policy: "appVersion",
      },
      extra: {
        router: {
          origin: false,
        },
        eas: {
          projectId: "575229df-4f5a-45c9-9326-e1e8810101f0",
        },
      },
      owner: "gokaytitrek",
      updates: {
        url: "https://u.expo.dev/575229df-4f5a-45c9-9326-e1e8810101f0",
      },
    },
  };
};
