import { IAdbrixSdkCore } from "./models";
import { NotificationPermission } from '@/push/models/notification-permission';

interface SafariPushPermissionData {
  permission: NotificationPermission;
  deviceToken: string;
}

declare global {
  interface Window {
    safari: {
      pushNotification: {
        permission: (webPushId: string) => SafariPushPermissionData,
        requestPermission: (serviceURL: string, webPushId: string, identifyOptions: object, callback?: (permissionData: SafariPushPermissionData) => void) => void,
      },
    };
  }
}

declare const adbrix: IAdbrixSdkCore;
