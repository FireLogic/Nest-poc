import { TaskStatus } from "../task.entity"
import {IsIn, IsNotEmpty, IsOptional, IsString, MinLength} from 'class-validator'

export class CreateTaskDTO{
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    title: string

    @IsString()
    @IsNotEmpty()
    description: string

}

export class updateClassDTO{
    @IsString()
    @IsOptional()
    title?: string

    @IsString()
    @IsOptional()
    description?: string

    @IsString()
    @IsOptional()
    @IsIn([TaskStatus.PENDING, TaskStatus.DONE, TaskStatus.IN_PROGRESS])
    status?: TaskStatus
}