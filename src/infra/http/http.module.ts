import { Module } from '@nestjs/common';
import { NotificationsController } from './controllers/notifications.controller';
import { DatabaseModule } from '../database/database.module';
import { PrismaService } from '../database/prisma/prisma.service';
import { NotificationsRepository } from 'src/app/repositories/notifications-repository';
import { PrismaNotificationsRepository } from '../database/prisma/repositories/prisma-notifications-repository';
import {
  CountRecipientNotifications,
  GetRecipientNotifications,
  ReadNotification,
  UnreadNotification,
  CancelNotification,
  SendNotification,
} from '@app/use-cases';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    CountRecipientNotifications,
    GetRecipientNotifications,
    ReadNotification,
    UnreadNotification,
    PrismaService,
    {
      provide: NotificationsRepository,
      useClass: PrismaNotificationsRepository,
    },
  ],
})
export class HttpModule {}
