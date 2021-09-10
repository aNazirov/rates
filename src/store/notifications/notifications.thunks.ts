import { notificationsAction } from './notifications.slices';

interface IData {
  notification: boolean;
  message: string;
}

export const setNotifications = (data: IData) => async (dispatch: any) => {
  dispatch(notificationsAction.setNotification(data))
};