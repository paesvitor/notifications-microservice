import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { CancelNotification } from './cancel-notification';
import { Content } from '../entities/content';
import { Notification } from '../entities/notification';

describe('Cancel Notification', () => {
  it('Should be able to cancel a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const cancelNotification = new CancelNotification(notificationsRepository);

    const notification = new Notification({
      category: 'Social',
      content: new Content('Nova solicitação de amizade.'),
      recipientId: 'test-id',
    });

    await notificationsRepository.create(notification);
    await cancelNotification.execute({ notificationId: notification.id });

    expect(notificationsRepository.notifications[0].canceledAt).toEqual(
      expect.any(Date),
    );
  });
});
