import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ActivitySchema, Activity } from './schemas/activity.schema';
import { ActivityService } from './services/activity.service';
import { ActivityController } from './controllers/activity.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Activity.name, schema: ActivitySchema },
    ]),
  ],
  providers: [ActivityService],
  controllers: [ActivityController],
})
export class ActivityModule {}
