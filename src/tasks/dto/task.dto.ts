
import {IsIn, IsNotEmpty, IsOptional, IsString, MinLength} from 'class-validator'
import { ApiProperty } from '@nestjs/swagger';
import{Schema, Prop, SchemaFactory} from '@nestjs/mongoose'

export enum TaskStatus{
    PENDING = 'PENDING',
    IN_PROGRESS ='IN_PROGRESS',
    DONE = 'DONE'
}


@Schema({
    timestamps: true
})
export class Task{
    @Prop({
        unique: true,
        required: true,
        trim: true
    })
    title: string

    @Prop({
        trim: true
    })
    description: string

    @Prop()
    status: TaskStatus
}

export const  TaskSchema = SchemaFactory.createForClass(Task);





























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


