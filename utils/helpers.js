import AsyncStorage from '@react-native-community/async-storage'
import * as Permissions from 'expo-permissions'
import * as Notifications from 'expo-notifications'
import { LOCAL_NOTIFICATION_KEY } from './configs'
export const shapeTheDeck = title => {
  /*
  will create an object of form
   {
      title,
      questions:[]
  }
  */
  return {
    [title]: {
      title,
      questions: []
    }
  }
}
export const clearLocalNotification = () => {
  return AsyncStorage.removeItem(LOCAL_NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}


const createLocalNotification = () => {
  return {
    title: "Quiz Time",
    body: "👋 Hey Don't Forget to Take a Quiz Today",
    android: {
      sound: true,
      sticky: false,
      vibrate: true,
      priority: 'high'
    }
  }
}

export const setLocalNotification = () => {
  AsyncStorage
    .getItem(LOCAL_NOTIFICATION_KEY)
    .then(JSON.parse)
    .then(res => {
      if (res === null) {
        console.log('notifying');
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            console.log(status === "granted");
            if (status === "granted") {

              let tomorrow = new Date();
              tomorrow.setDate(tomorrow.getDate() + 0);
              tomorrow.setHours(21);
              tomorrow.setMinutes(0);
              Notifications.scheduleNotificationAsync()
              Notifications.scheduleNotificationAsync({
                content: createLocalNotification(),
                trigger: {
                  seconds: tomorrow.getTime() / 1000,
                  repeat: 'day',
                }
              }
              );

              AsyncStorage.setItem(LOCAL_NOTIFICATION_KEY, JSON.stringify(true));
            }

          })
      }

    })
}