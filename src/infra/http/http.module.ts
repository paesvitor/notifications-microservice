import { Module } from '@nestjs/common';
import { NotificationsController } from './controllers/notifications.controller';
import { DatabaseModule } from '../database/database.module';
import { PrismaService } from '../database/prisma/prisma.service';
import { NotificationsRepository } from 'src/app/repositories/notifications-repository';
import { PrismaNotificationsRepository } from '../database/prisma/repositories/prisma-notifications-repository';
import { SendNotification } from 'src/app/use-cases/send-notification';
import { CancelNotification } from 'src/app/use-cases/cancel-notification';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    PrismaService,
    {
      provide: NotificationsRepository,
      useClass: PrismaNotificationsRepository,
    },
  ],
})
export class HttpModule {}
