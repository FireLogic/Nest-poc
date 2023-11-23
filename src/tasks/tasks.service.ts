import { Injectable } from '@nestjs/common';
import { Task } from './dto/task.dto';
import { InjectModel } from '@nestjs/mongoose';
import {Model} from 'mongoose';


@Injectable()
export class TasksService {
    constructor(@InjectModel(Task.name)private taskModel: Model<Task>){

    }
    getAllTasks() {
        return this.taskModel.find();
    };
    
    async create(createTask: any) {
        const newTask = new this.taskModel(createTask);
        return newTask.save();
    }

    async getTaskById(id: string){
        return this.taskModel.findById(id) 
        
    }

    async deleteTask(id: string){
        return this.taskModel.findByIdAndDelete(id);
    }


    async updateTask(id: string, task:any) {
        return this.taskModel.findByIdAndUpdate(id, task);

    }

    

    
}
