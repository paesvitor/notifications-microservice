import { Content } from '../../src/app/entities/content';
import {
  Notification,
  type NotificationProps,
} from '../../src/app/entities/notification';

export const makeNotification = (override?: Partial<NotificationProps>) =>
  new Notification({
    category: 'Social',
    content: new Content('Nova solicitação de amizade.'),
    recipientId: 'recipient-1',
    ...override,
  });
