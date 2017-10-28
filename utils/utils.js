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
    body: "Don't Forget To Study! Every Day Count!",
    ios: {
      sound: true,
    },
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
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync();
              const tomorrow = new Date();
              tomorrow.setDate(tomorrow.getDate() + 1);
              tomorrow.setHours(20);
              tomorrow.setMinutes(0);
              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                  time: tomorrow,
                  repeat: 'day',
                },
              );
              AsyncStorage.setItem(NOTIFICATION_KEY, 'true');
            }
          });
      }
    });
}

export const newDeck = title => ({ id: uuid(), title, questions: [] });

export const newCard = (question, answer) => ({ id: uuid(), question, answer });
