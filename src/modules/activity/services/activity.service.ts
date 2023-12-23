import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Activity } from '../schemas/activity.schema';
import { CreateActivityDto, UpdateActivityDto } from '../dtos/index';
import { ObjectId } from 'mongoose';

@Injectable()
export class ActivityService {
  constructor(
    @InjectModel(Activity.name) private activityModel: Model<Activity>,
  ) {}

  public async getAll(): Promise<Activity[]> {
    return await this.activityModel.find({});
  }

  public async getById(Id: ObjectId): Promise<Activity> {
    return await this.activityModel.findById(Id);
  }

  public async create(createActivityDto: CreateActivityDto): Promise<Activity> {
    const data = new this.activityModel(createActivityDto);
    return data.save();
  }

  public async update(
    Id: ObjectId,
    updateActivityDto: UpdateActivityDto,
  ): Promise<Activity> {
    const data = await this.activityModel.findByIdAndUpdate(
      { _id: Id },
      updateActivityDto,
    );
    return data;
  }

  public async delete(Id: ObjectId) {
    const activity = await this.getById(Id);
    if (!activity) {
      throw new NotFoundException(`Activity with ID ${Id} not found`);
    }
    await this.activityModel.findByIdAndDelete(Id);
  }
}
