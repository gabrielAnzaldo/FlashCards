import { AsyncStorage } from 'react-native';
import { Notifications, Permissions } from 'expo';
import uuid from 'uuid/v4';

const NOTIFICATION_KEY = 'Flashcards:notifications';

export function clearLocalNotifications() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync);
}
export function createNotification() {
  return {
    title: 'Study!',
    body: "Don't Forget To Study, Every Single Day Matter!",
    android: {
      sound: true,
      priority: 'high',
      vibrate: true,
      sticky: false,
    },
  };
}

export function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(() => {
      Permissions.askAsync(Permissions.NOTIFICATIONS)
        .then(({ status }) => {
          if (status === 'granted') {
            Notifications.cancelAllScheduledNotificationsAsync();
            const newNotificationDate = new Date();
            newNotificationDate.setDate(newNotificationDate.getDate() + 1);
            newNotificationDate.setHours(20);
            newNotificationDate.setMinutes(0);
            Notifications.scheduleLocalNotificationAsync(
              createNotification(),
              {
                time: newNotificationDate,
                repeat: 'day',
              },
            );
            AsyncStorage.setItem(NOTIFICATION_KEY, 'true');
          }
        });
    });
}

export const newDeck = title => ({ id: uuid(), title, questions: [] });

export const newCard = (question, answer) => ({ id: uuid(), question, answer });
