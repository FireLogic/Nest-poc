import { TaskStatus } from "../task.entity"
import {IsIn, IsNotEmpty, IsOptional, IsString, MinLength} from 'class-validator'
import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDTO{
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @ApiProperty()

    title: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    description: string

}

export class updateClassDTO{
    @IsString()
    @IsOptional()
    @ApiProperty({
        description: 'El titulo de la tarea',
        required: false
    })
    title?: string

    @IsString()
    @IsOptional()  
    @ApiProperty()
    description?: string

    @IsString()
    @IsOptional()
    @ApiProperty()
    @IsIn([TaskStatus.PENDING, TaskStatus.DONE, TaskStatus.IN_PROGRESS])
    status?: TaskStatus
}