import { randomUUID } from 'crypto';
import { Notification } from './notification';
import { Content } from './content';

describe('Notification', () => {
  it('Should be able to create a notification', () => {
    const notification = new Notification({
      category: 'Social',
      content: new Content('You have a new friend request.'),
      recipientId: randomUUID(),
    });

    expect(notification).toBeTruthy();
  });
});
