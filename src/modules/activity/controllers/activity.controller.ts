import {
  Controller,
  Get,
  Post,
  Res,
  Put,
  Delete,
  Param,
  Body,
  HttpStatus,
} from '@nestjs/common';
import { ActivityService } from '../services/activity.service';
import { Response as ResponseType } from '../../../util/enums/response.enum';
import { Response } from 'express';
import { CreateActivityDto, UpdateActivityDto } from '../dtos';
import { IdParamValidation } from '../decorators/id-param-validation.decorator';

@Controller('activities')
export class ActivityController {
  constructor(private activityService: ActivityService) {}

  @Get()
  public async getAll(@Res() response: Response) {
    try {
      const data = await this.activityService.getAll();
      return response.status(HttpStatus.OK).json({
        type: ResponseType.SUCCESS,
        message: null,
        data: data,
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        type: ResponseType.ERROR,
        message: 'Something went wrong, Please try again later',
        data: null,
      });
    }
  }

  @Get('/:id')
  public async getById(
    @Res() response: Response,
    @Param() { id }: IdParamValidation,
  ) {
    try {
      const data = await this.activityService.getById(id);
      return response.status(HttpStatus.OK).json({
        type: ResponseType.SUCCESS,
        message: null,
        data: data,
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        type: ResponseType.ERROR,
        message: 'Something went wrong, Please try again later',
        data: null,
      });
    }
  }

  @Post()
  public async create(
    @Res() response: Response,
    @Body() createActivityDto: CreateActivityDto,
  ) {
    try {
      const data = await this.activityService.create(createActivityDto);
      return response.status(HttpStatus.OK).json({
        type: ResponseType.SUCCESS,
        message: 'Activity has been created successfully',
        data: data,
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        type: ResponseType.ERROR,
        message: 'Something went wrong, Please try again later',
        data: null,
      });
    }
  }

  @Put('/:id')
  public async update(
    @Res() response: Response,
    @Param() { id }: IdParamValidation,
    @Body() updateActivityDto: UpdateActivityDto,
  ) {
    try {
      const data = await this.activityService.update(id, updateActivityDto);
      return response.status(HttpStatus.OK).json({
        type: ResponseType.SUCCESS,
        message: 'Activity has been updated successfully',
        data: data,
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        type: ResponseType.ERROR,
        message: 'Something went wrong, Please try again later',
        data: null,
      });
    }
  }

  @Delete('/:id')
  public async delete(
    @Res() response: Response,
    @Param() { id }: IdParamValidation,
  ) {
    try {
      await this.activityService.delete(id);
      return response.status(HttpStatus.OK).json({
        type: ResponseType.SUCCESS,
        message: 'Activity has been deleted successfully',
        data: null,
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        type: ResponseType.ERROR,
        message: 'Something went wrong, Please try again later',
        data: null,
      });
    }
  }
}
